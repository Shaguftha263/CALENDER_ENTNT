import React, { useState } from 'react';

function Admin() {
  const [companyName, setCompanyName] = useState('');
  const [communicationSettings, setCommunicationSettings] = useState('');

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleCommunicationSettingsChange = (e) => {
    setCommunicationSettings(e.target.value);
  };

  const saveSettings = () => {
    alert(`Settings saved! Company: ${companyName}, Communication Settings: ${communicationSettings}`);
  };

  return (
    <div>
      <h2>Admin Module</h2>
      <div>
        <label>Company Name:</label>
        <input
          type="text"
          value={companyName}
          onChange={handleCompanyNameChange}
          placeholder="Enter company name"
        />
      </div>
      <div>
        <label>Communication Settings:</label>
        <textarea
          value={communicationSettings}
          onChange={handleCommunicationSettingsChange}
          placeholder="Set communication preferences"
        />
      </div>
      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
}

export default Admin;
