// Assuming you have references to your team sections (e.g., DOM elements)
const managementTeamSection = document.getElementById('management-team-section');
const advisoryTeamSection = document.getElementById('advisory-team-section');

// Assuming you have your team data defined (management_team and advisory_team)

populateTeam(management_team, managementTeamSection);
populateTeam(advisory_team, advisoryTeamSection);
