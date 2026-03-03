import React, { useState, useEffect } from "react";
import { defaultTheoryData, imageMap } from "data/theoryData";
import { loadTheoryData, saveTheoryData } from "utils/theoryStorage";

export default function Dashboard() {
  const [theories, setTheories] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAddTheoryModal, setShowAddTheoryModal] = useState(false);
  const [editingTheory, setEditingTheory] = useState(null);
  const [selectedTheory, setSelectedTheory] = useState(null);
  const [isEditingContent, setIsEditingContent] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [newTheoryForm, setNewTheoryForm] = useState({
    name: "",
    title: "",
    aim: "",
    theory: "",
    imageDataUrl: "",
  });

  useEffect(() => {
    const loaded = loadTheoryData(defaultTheoryData);
    const normalized = loaded.map((item) => {
      if (Array.isArray(item.sections)) return item;
      const paragraphs = item.theory
        ? item.theory.split(/\n\n+/).map((p) => p.trim()).filter(Boolean)
        : [""];
      return {
        ...item,
        sections: [{ heading: "Theory", paragraphs }],
      };
    });
    setTheories(normalized);
    setSelectedTheory(normalized[0]);
  }, []);

  const resolveImage = (theory) => {
    if (!theory) return null;
    return theory.imageDataUrl || imageMap[theory.imageKey] || null;
  };

  const handleAddTheory = () => {
    if (formData.title.trim() === "") {
      alert("Please enter a theory title");
      return;
    }
    const newTheory = {
      id: theories.length + 1,
      name: formData.title,
      file: formData.title.replace(/\s+/g, "_") + ".js",
      description: formData.description,
      title: formData.title,
      aim: "",
      theory: ""
    };
    const updatedTheories = [...theories, newTheory];
    setTheories(updatedTheories);
    setSelectedTheory(newTheory);
    saveTheoryData(updatedTheories);
    setFormData({ title: "", description: "" });
    setShowAddModal(false);
    alert("Theory added successfully!");
  };

  const handleEditTheory = (theory) => {
    setEditingTheory(theory);
    setFormData({ title: theory.name, description: theory.description });
    setShowAddModal(true);
  };

  const handleSaveEdit = () => {
    if (formData.title.trim() === "") {
      alert("Please enter a theory title");
      return;
    }
    const updatedTheories = theories.map((t) =>
      t.id === editingTheory.id
        ? { ...t, name: formData.title, description: formData.description }
        : t
    );
    setTheories(updatedTheories);
    saveTheoryData(updatedTheories);
    setFormData({ title: "", description: "" });
    setEditingTheory(null);
    setShowAddModal(false);
    alert("Theory updated successfully!");
  };

  const handleDeleteTheory = (id) => {
    if (window.confirm("Are you sure you want to delete this theory?")) {
      const updatedTheories = theories.filter((t) => t.id !== id);
      setTheories(updatedTheories);
      if (selectedTheory?.id === id) {
        setSelectedTheory(updatedTheories[0] || null);
      }
      saveTheoryData(updatedTheories);
      alert("Theory deleted successfully!");
    }
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setEditingTheory(null);
    setFormData({ title: "", description: "" });
  };

  const handleAddNewTheory = () => {
    if (newTheoryForm.name.trim() === "") {
      alert("Please enter a theory name");
      return;
    }
    const theory = {
      id: theories.length + 1,
      key: newTheoryForm.name.toLowerCase().replace(/\s+/g, "-"),
      name: newTheoryForm.name,
      file: newTheoryForm.name.replace(/\s+/g, "_") + ".js",
      description: "New theory",
      title: newTheoryForm.title || newTheoryForm.name,
      aim: newTheoryForm.aim,
      sections: [
        {
          heading: "Theory",
          paragraphs: newTheoryForm.theory
            ? newTheoryForm.theory.split(/\n\n+/).map((p) => p.trim()).filter(Boolean)
            : [""],
        },
      ],
      imageDataUrl: newTheoryForm.imageDataUrl,
      imageAlt: "Algorithm",
    };
    const updatedTheories = [...theories, theory];
    setTheories(updatedTheories);
    setSelectedTheory(theory);
    setNewTheoryForm({ name: "", title: "", aim: "", theory: "", imageDataUrl: "" });
    saveTheoryData(updatedTheories);
    setShowAddTheoryModal(false);
    alert("New theory added successfully!");
  };

  const handleUpdateTheoryContent = () => {
    const updatedTheories = theories.map((t) =>
      t.id === selectedTheory.id
        ? { ...t, ...selectedTheory }
        : t
    );
    setTheories(updatedTheories);
    saveTheoryData(updatedTheories);
    setIsEditingContent(false);
    alert("Theory updated successfully! ✓ Changes saved.");
  };

  const updateSectionHeading = (index, value) => {
    const updatedSections = selectedTheory.sections.map((section, idx) =>
      idx === index ? { ...section, heading: value } : section
    );
    setSelectedTheory({ ...selectedTheory, sections: updatedSections });
  };

  const updateSectionParagraphs = (index, value) => {
    const paragraphs = value
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean);
    const updatedSections = selectedTheory.sections.map((section, idx) =>
      idx === index ? { ...section, paragraphs } : section
    );
    setSelectedTheory({ ...selectedTheory, sections: updatedSections });
  };

    return (
      <>          

      <div className="min-h-screen bg-gray-100 p-8" style={{paddingLeft: "3%",paddingTop:"2% "}}>
        
        {/* Toggle Theory Section */}
        {selectedTheory && (
          <div className="max-w-6xl mx-auto">
            {/* Theory Selector and Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 w-full md:w-auto">
                  <label className="block text-gray-700 font-semibold mb-2">Select Theory:</label>
                  <select
                    value={selectedTheory.id}
                    onChange={(e) => setSelectedTheory(theories.find(t => t.id === parseInt(e.target.value)))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    {theories.map((theory) => (
                      <option key={theory.id} value={theory.id}>
                        {theory.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex gap-3 w-full md:w-auto flex-wrap justify-center md:justify-end">
                  <button
                    onClick={() => {
                      setIsEditingContent(!isEditingContent);
                    }}
                    className={`flex-1 md:flex-none font-bold uppercase text-sm px-8 py-3 rounded transition-colors transform hover:scale-105 ${
                      isEditingContent
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {isEditingContent ? "✕ Cancel Edit" : "✎ Edit Theory"}
                  </button>
                  <button
                    onClick={() => {
                      setShowAddTheoryModal(true);
                    }}
                    className="flex-1 md:flex-none bg-green-500 text-white font-bold uppercase text-sm px-8 py-3 rounded hover:bg-green-600 transition-colors transform hover:scale-105"
                  >
                    + Add New
                  </button>
                </div>
              </div>
            </div>

            {/* Theory Content Display/Edit */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              {isEditingContent ? (
                // Edit Mode
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-800 font-semibold">✎ EDIT MODE - Make your changes and click "Save Changes" to update</p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Theory Title</label>
                    <input
                      type="text"
                      value={selectedTheory.title}
                      onChange={(e) => setSelectedTheory({ ...selectedTheory, title: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Aim</label>
                    <textarea
                      value={selectedTheory.aim}
                      onChange={(e) => setSelectedTheory({ ...selectedTheory, aim: e.target.value })}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Theory Sections</label>
                    <p className="text-sm text-gray-600 mb-4">Use a blank line to separate paragraphs.</p>
                    <div className="space-y-6">
                      {selectedTheory.sections.map((section, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <label className="block text-gray-700 font-semibold mb-2">Section Heading</label>
                          <input
                            type="text"
                            value={section.heading}
                            onChange={(e) => updateSectionHeading(index, e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          />

                          <label className="block text-gray-700 font-semibold mt-4 mb-2">Section Paragraphs</label>
                          <textarea
                            value={section.paragraphs.join("\n\n")}
                            onChange={(e) => updateSectionParagraphs(index, e.target.value)}
                            rows="6"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handleUpdateTheoryContent}
                      className="flex-1 bg-green-600 text-white font-bold uppercase text-lg px-6 py-4 rounded hover:bg-green-700 transition-colors transform hover:scale-105 shadow-lg"
                    >
                      💾 Save Changes to Theory
                    </button>
                    <button
                      onClick={() => setIsEditingContent(false)}
                      className="flex-1 bg-gray-500 text-white font-bold uppercase text-sm px-6 py-3 rounded hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // View Mode - Display with real formatting and images
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">{selectedTheory.title}</h1>
                    <p className="text-gray-600">File: <span className="font-mono text-sm">{selectedTheory.file}</span></p>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Aim</h2>
                    <div className="border-t-2 border-black mb-2"></div>
                    <div className="border-t-2 border-black mb-4"></div>
                    <p className="text-lg leading-relaxed text-gray-700">{selectedTheory.aim}</p>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Theory</h2>
                    {selectedTheory.sections.map((section, index) => (
                      <div key={index} className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">{section.heading}</h3>
                        {section.paragraphs.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-lg leading-relaxed text-gray-700 mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Display Algorithm Image */}
                  {resolveImage(selectedTheory) && (
                    <div className="border-t-2 border-gray-200 pt-6">
                      <h4 className="text-lg font-semibold mb-4">Algorithm:</h4>
                      <div className={selectedTheory.imageContainerClassName || "mt-4 flex justify-center"}>
                        <img
                          src={resolveImage(selectedTheory)}
                          alt={selectedTheory.imageAlt}
                          className={selectedTheory.imageClassName || "border border-gray-300 shadow-lg"}
                          style={selectedTheory.imageStyle}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      {/* Modal for Add New Theory */}
      {showAddTheoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 max-h-screen overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Theory Page</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Theory Name</label>
                <input
                  type="text"
                  value={newTheoryForm.name}
                  onChange={(e) => setNewTheoryForm({ ...newTheoryForm, name: e.target.value })}
                  placeholder="e.g., Quick Sort Theory"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Title (Header)</label>
                <input
                  type="text"
                  value={newTheoryForm.title}
                  onChange={(e) => setNewTheoryForm({ ...newTheoryForm, title: e.target.value })}
                  placeholder="e.g., Implementation of Quick Sort Techniques"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Aim</label>
                <textarea
                  value={newTheoryForm.aim}
                  onChange={(e) => setNewTheoryForm({ ...newTheoryForm, aim: e.target.value })}
                  placeholder="Enter the aim of this theory..."
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Theory Content</label>
                <textarea
                  value={newTheoryForm.theory}
                  onChange={(e) => setNewTheoryForm({ ...newTheoryForm, theory: e.target.value })}
                  placeholder="Enter the theory content..."
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Algorithm Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files && e.target.files[0];
                    if (!file) {
                      setNewTheoryForm({ ...newTheoryForm, imageDataUrl: "" });
                      return;
                    }
                    const reader = new FileReader();
                    reader.onload = () => {
                      setNewTheoryForm({ ...newTheoryForm, imageDataUrl: reader.result });
                    };
                    reader.readAsDataURL(file);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {newTheoryForm.imageDataUrl && (
                  <p className="text-sm text-gray-600 mt-2">Selected image is ready.</p>
                )}
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setShowAddTheoryModal(false);
                  setNewTheoryForm({ name: "", title: "", aim: "", theory: "", imageDataUrl: "" });
                }}
                className="flex-1 bg-gray-500 text-white font-bold uppercase text-sm px-4 py-2 rounded hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddNewTheory}
                className="flex-1 bg-blue-500 text-white font-bold uppercase text-sm px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Add Theory
              </button>
            </div>
          </div>
        </div>
      )}

      </>
    );
  }