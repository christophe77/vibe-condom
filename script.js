// Configuration generator function
function generateConfig(selectedTech) {
    const config = {
        architecture: [],
        patterns: [],
        practices: [],
        gitflow: []
    };

    selectedTech.forEach(tech => {
        if (['monolith', 'microservices', 'serverless', 'clean-arch', 'hexagonal', 
        'event-driven', 'cqs', 'ddd', 'layered', 'pipes-filters', 'broker', 
        'blackboard', 'peer-to-peer', 'space-based', 'cloud-native'].includes(tech)) {
            config.architecture.push(tech);
        } else if (['solid', 'kiss', 'dry', 'yagni', 'factory', 'singleton', 'observer', 
        'strategy', 'repository', 'unit-of-work', 'adapter', 'bridge', 'composite', 
        'decorator', 'facade', 'flyweight', 'proxy', 'chain-of-responsibility', 
        'command', 'interpreter', 'iterator', 'mediator', 'memento', 'state', 
        'template-method', 'visitor'].includes(tech)) {
            config.patterns.push(tech);
        } else if (['tdd', 'bdd', 'clean-code', 'pair-programming', 'code-review', 
        'ci-cd', 'agile', 'scrum', 'kanban', 'xp', 'devops', 'gitops', 
        'infrastructure-as-code', 'security-first', 'performance-optimization', 
        'documentation', 'code-standards', 'refactoring', 'technical-debt', 
        'monitoring'].includes(tech)) {
            config.practices.push(tech);
        } else if (['gitflow', 'trunk-based', 'feature-branch', 'github-flow', 
        'gitlab-flow', 'forking-workflow', 'centralized-workflow', 
        'gitflow-hybrid'].includes(tech)) {
            config.gitflow.push(tech);
        }
    });

    return config;
}

document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const generateBtn = document.getElementById('generateBtn');
    const modal = document.getElementById('configModal');
    const closeBtn = document.querySelector('.close');
    const copyBtn = document.getElementById('copyBtn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Enable/disable generate button based on checkbox selection
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
            generateBtn.disabled = !anyChecked;
        });
    });

    // Generate configuration when button is clicked
    generateBtn.addEventListener('click', () => {
        const selectedTech = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        const config = generateConfig(selectedTech);
        displayConfig(config);
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // Close modal when clicking close button or outside modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Tab navigation
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
            
            // Show/hide copy button based on active tab
            copyBtn.style.display = btn.dataset.tab === 'how-to' ? 'none' : 'block';
        });
    });

    // Copy to clipboard
    copyBtn.addEventListener('click', () => {
        const configText = document.querySelector('.tab-content.active').textContent;
        navigator.clipboard.writeText(configText).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        });
    });

    function displayConfig(config) {
        // How To tab
        const howToContent = document.getElementById('how-to');
        howToContent.innerHTML = `
            <h3>How to Use This Configuration</h3>
            <div class="how-to-steps">
                <h4>1. Create Configuration File</h4>
                <p>Create a new file named <code>cursor.json</code> in your project's root directory.</p>
                
                <h4>2. Copy Configuration</h4>
                <p>Copy the configuration from any of the tabs above using the "Copy to Clipboard" button.</p>
                
                <h4>3. Paste Configuration</h4>
                <p>Paste the copied configuration into your <code>cursor.json</code> file.</p>
                
                <h4>4. Merge Configurations</h4>
                <p>If you have multiple configurations (from different tabs), merge them into a single JSON object:</p>
                <pre>{
  "architecture": { ... },
  "patterns": { ... },
  "practices": { ... },
  "gitflow": { ... }
}</pre>
                
                <h4>5. Apply Configuration</h4>
                <p>Cursor will automatically detect and apply the configuration from your <code>cursor.json</code> file.</p>
                
                <h4>Important Notes:</h4>
                <ul>
                    <li>Make sure the JSON is properly formatted</li>
                    <li>Keep your configuration file in version control</li>
                    <li>Update the configuration as your project evolves</li>
                    <li>Share the configuration with your team members</li>
                </ul>
            </div>
        `;

        // Architecture tab
        const architectureContent = document.getElementById('architecture');
        if (config.architecture.length > 0) {
            architectureContent.innerHTML = `
                <h3>Selected Architecture</h3>
                <pre>${JSON.stringify(config.architecture, null, 2)}</pre>
                <h3>Configuration</h3>
                <pre>{
  "architecture": {
    "type": "${config.architecture[0]}",
    "settings": {
      "scalability": true,
      "maintainability": true,
      "security": true
    }
  }
}</pre>`;
        } else {
            architectureContent.innerHTML = '<p>No architecture selected</p>';
        }

        // Patterns tab
        const patternsContent = document.getElementById('patterns');
        if (config.patterns.length > 0) {
            patternsContent.innerHTML = `
                <h3>Selected Patterns</h3>
                <pre>${JSON.stringify(config.patterns, null, 2)}</pre>
                <h3>Configuration</h3>
                <pre>{
  "patterns": {
    "enabled": ${JSON.stringify(config.patterns)},
    "settings": {
      "strictMode": true,
      "documentation": true
    }
  }
}</pre>`;
        } else {
            patternsContent.innerHTML = '<p>No patterns selected</p>';
        }

        // Practices tab
        const practicesContent = document.getElementById('practices');
        if (config.practices.length > 0) {
            practicesContent.innerHTML = `
                <h3>Selected Practices</h3>
                <pre>${JSON.stringify(config.practices, null, 2)}</pre>
                <h3>Configuration</h3>
                <pre>{
  "practices": {
    "enabled": ${JSON.stringify(config.practices)},
    "settings": {
      "enforceStandards": true,
      "codeReview": true,
      "testing": true
    }
  }
}</pre>`;
        } else {
            practicesContent.innerHTML = '<p>No practices selected</p>';
        }

        // Git Flow tab
        const gitflowContent = document.getElementById('gitflow');
        if (config.gitflow.length > 0) {
            gitflowContent.innerHTML = `
                <h3>Selected Git Flow</h3>
                <pre>${JSON.stringify(config.gitflow, null, 2)}</pre>
                <h3>Configuration</h3>
                <pre>{
  "gitflow": {
    "type": "${config.gitflow[0]}",
    "settings": {
      "branchNaming": true,
      "mergeStrategy": "squash",
      "protectedBranches": ["main", "develop"]
    }
  }
}</pre>`;
        } else {
            gitflowContent.innerHTML = '<p>No git flow selected</p>';
        }
    }
}); 