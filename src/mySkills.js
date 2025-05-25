export function mySkills() {
    const skillContainer = document.getElementById('elementSkill');
    const skills = [
        { name: 'HTML', level: 60 },
        { name: 'CSS', level: 40 },
        { name: 'JavaScript', level: 20 },
        { name: 'Node.js', level: 30 },
        { name: 'UI/UX Design', level: 50 },
        { name: 'GitHub', level: 40 }
    ];

    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.className = 'skill-item';
        
        const skillName = document.createElement('span');
        skillName.className = 'skill-name';
        skillName.textContent = skill.name;
        
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';
        
        const skillProgress = document.createElement('div');
        skillProgress.className = 'skill-progress';
        skillProgress.style.width = `${skill.level}%`;
        
        const skillPercent = document.createElement('span');
        skillPercent.className = 'skill-percent';
        skillPercent.textContent = `${skill.level}%`;
        
        skillBar.appendChild(skillProgress);
        skillBar.appendChild(skillPercent);
        
        skillItem.appendChild(skillName);
        skillItem.appendChild(skillBar);
        
        skillContainer.appendChild(skillItem);
    });

    // Анимация прогресса
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        });
    }, 500);
}