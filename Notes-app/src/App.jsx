import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  const submitHandling = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) {
      alert("Please enter both title and details");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title,
      details: details,
      date: new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);

    // Clear inputs
    setTitle("");
    setDetails("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const clearAllNotes = () => {
    setNotes([]);
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <div className="px-10 pt-10">
        <h1 className="text-4xl font-bold">My Notes</h1>

        <p className="text-gray-400 mt-2">
          Write and manage your important notes
        </p>
      </div>

      {/* Add Note Form */}
      <form
        onSubmit={submitHandling}
        className="flex flex-col gap-4 p-10"
      >
        <input
          type="text"
          placeholder="Enter Notes heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-5 py-3 rounded border-2 border-gray-700 bg-gray-900 outline-none focus:border-white"
        />

        <textarea
          placeholder="Write Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="px-5 py-3 h-32 rounded border-2 border-gray-700 bg-gray-900 outline-none focus:border-white resize-none"
        />

        <button
          type="submit"
          className="bg-white text-black px-5 py-3 rounded font-semibold hover:bg-gray-300"
        >
          Add Note
        </button>
      </form>

      {/* Recent Notes Header */}
      <div className="px-10 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Recent Notes</h2>

          <p className="text-gray-400">
            {notes.length} {notes.length === 1 ? "note" : "notes"}
          </p>
        </div>

        {notes.length > 0 && (
          <button
            onClick={clearAllNotes}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Notes */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {notes.length === 0 ? (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 text-lg">
              No notes available
            </p>

            <p className="text-gray-600 mt-2">
              Start writing your first note above.
            </p>
          </div>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="bg-gray-900 border border-gray-700 rounded-xl p-5 hover:border-gray-400 transition"
            >

              {/* Note Header */}
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-xl font-bold break-words">
                  {note.title}
                </h3>

                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-red-500 hover:text-red-400"
                >
                  Delete
                </button>
              </div>

              {/* Details */}
              <p className="text-gray-300 mt-4 break-words">
                {note.details}
              </p>

              {/* Date */}
              <p className="text-gray-500 text-sm mt-5">
                {note.date}
              </p>

            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default App;