const searchInput = document.getElementById('search-input');
const notesList = document.getElementById('notes-list');

const renderNotes = (notes) => {
    if (!notesList) {
        return;
    }
    if (!notes.length) {
        notesList.innerHTML = '<div class="empty-state">No matching notes.</div>';
        return;
    }
    notesList.innerHTML = notes
        .map(
            (note) => `
            <a class="note-item" href="/note/${note.id}">
                <div class="note-title">${note.title}</div>
                <div class="note-meta">Last modified: ${note.last_modified}</div>
            </a>
        `
        )
        .join('');
};

if (searchInput) {
    searchInput.addEventListener('input', async (event) => {
        const query = event.target.value.trim();
        const response = await fetch(`/search?q=${encodeURIComponent(query)}`);
        const notes = await response.json();
        renderNotes(notes);
    });
}

const exportButton = document.getElementById('export-button');
const exportForm = document.getElementById('export-form');
const exportPassword = document.getElementById('export-password');

if (exportButton && exportForm && exportPassword) {
    exportButton.addEventListener('click', () => {
        const password = window.prompt('Enter a password to encrypt this note:');
        if (!password) {
            return;
        }
        exportPassword.value = password;
        exportForm.submit();
    });
}

const navButtons = document.querySelectorAll('.nav-button[data-target]');
navButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
