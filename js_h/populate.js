function populateTeam(teamData, teamSection) {
  teamData.forEach(member => {
    const col = document.createElement('div');
    col.classList.add('col-md-4', 'col-sm-6', 'col-xs-12');

    const article = document.createElement('article');

    if (Object.keys(member).length === 0) {
      article.classList.add('material-card');
    } else {
      const randomColorIndex = getRandomInt(colors.length);
      article.classList.add('material-card', colors[randomColorIndex]);

      const h2 = createMemberTitle(member);
      const mcContent = createMemberContent(member);
      const mcBtnAction = createMemberButton();
      const mcFooter = createMemberFooter(member);

      article.appendChild(h2);
      article.appendChild(mcContent);
      article.appendChild(mcBtnAction);
      article.appendChild(mcFooter);
    }

    col.appendChild(article);
    teamSection.appendChild(col);
  });
}

function createMemberTitle(member) {
  const h2 = document.createElement('h2');
  const nameSpan = document.createElement('span');
  nameSpan.textContent = member.name;
  const positionStrong = document.createElement('strong');
  const positionIcon = document.createElement('i');
  positionIcon.classList.add('fa', 'fa-fw', 'fa-star');
  positionStrong.appendChild(positionIcon);
  positionStrong.textContent += member.position;
  h2.appendChild(nameSpan);
  h2.appendChild(positionStrong);
  return h2;
}

function createMemberContent(member) {
  const mcContent = document.createElement('div');
  mcContent.classList.add('mc-content');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const img = document.createElement('img');
  img.classList.add('img-responsive');
  img.src = member.image; // Replace with actual image URL
  imgContainer.appendChild(img);

  const mcDescription = document.createElement('div');
  mcDescription.classList.add('mc-description');
  mcDescription.style.overflow = 'auto';
  mcDescription.style.maxHeight = '400px'; // Adjust height as needed
  mcDescription.textContent = member.description;

  mcContent.appendChild(imgContainer);
  mcContent.appendChild(mcDescription);

  return mcContent;
}

function createMemberButton() {
  const mcBtnAction = document.createElement('a');
  mcBtnAction.classList.add('mc-btn-action');
  const actionIcon = document.createElement('i');
  actionIcon.classList.add('fa', 'fa-bars');
  mcBtnAction.appendChild(actionIcon);
  return mcBtnAction;
}

function createMemberFooter(member) {
  const mcFooter = document.createElement('div');
  mcFooter.classList.add('mc-footer');

  // const socialHeader = document.createElement('h4');
  // socialHeader.textContent = 'Social';
  // mcFooter.appendChild(socialHeader);

  const socialLinks = member.social || []; // Handle cases where social object might be missing

  socialLinks.forEach(socialLink => {
    const socialIcon = document.createElement('a');
    socialIcon.classList.add('fa', 'fa-fw', socialLink.icon);
    if (socialLink.link) {
      socialIcon.href = socialLink.link;
    }
    mcFooter.appendChild(socialIcon);
  });

  return mcFooter;
}
