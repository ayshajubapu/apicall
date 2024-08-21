import React, { useState } from 'react';

// Define API details
const API_URL = 'https://jsearch.p.rapidapi.com/estimated-salary';
const API_KEY = 'fbfadedb62msha9eea4c6662bee9p1bd1a6jsn35b912aff682';

async function fetchJobData(jobTitle, location) {
  const url = `${API_URL}?job_title=${encodeURIComponent(jobTitle)}&location=${encodeURIComponent(location)}&radius=100`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'jsearch.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return null;
    }

    const result = await response.json();
    console.log('API Response:', result);

    if (result.data && result.data.length > 0) {
      return result.data[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching job data:', error);
    return null;
  }
}

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessage = { text: input, user: 'You' };
      setMessages([...messages, newMessage]);

      const [jobTitle, location] = input.split(',').map(part => part.trim());

      setLoading(true);
      const result = await fetchJobData(jobTitle, location);

      if (result) {
        setJobData({
          title: result.job_title,
          location: result.location,
          maxSalary: result.max_salary,
        });
      } else {
        setJobData(null);
      }
      setLoading(false);
      setInput('');
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-200">
      <div className="flex justify-center items-center h-[50vh] md:h-screen">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="absolute bottom-0 right-0 mb-4 md:mb-8 mr-4 md:mr-8 flex justify-center">
        <div className="w-full max-w-sm bg-gray-100 p-2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col flex-grow p-2 overflow-auto">
              {messages.map((message, index) => (
                <div key={index} className="flex mb-2">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white mr-2">
                    {message.user[0]}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xs font-semibold text-gray-700">{message.user}</div>
                    <div className="text-xs text-gray-500 whitespace-pre-wrap">{message.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 bg-gray-200 flex items-center">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="w-full px-2 py-1 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter job title, location"
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 cursor-pointer"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Job Data Container */}
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-lg font-bold">Loading...</p>
          </div>
        </div>
      )}

      {jobData && !loading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Job Details</h2>
            <div className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold">Title: {jobData.title}</h3>
              <p className="text-sm text-gray-600">Location: {jobData.location}</p>
              <p className="text-sm text-gray-600">Max Salary: ${jobData.maxSalary}</p>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 cursor-pointer"
              onClick={() => setJobData(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
