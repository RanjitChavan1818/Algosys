import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/student-details");
        setStudents(response.data.students);
      } catch (error) {
        console.error("Error fetching student data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <div className=" w-full px-4 relative bg-gradient-to-b from-blue-50 to-blue-200">
      <div className="bg-white rounded-lg shadow-xl border border-blue-300 relative flex flex-col min-w-0 break-words w-full mb-8">
    
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 underline mt-3 " >Student Details</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-blue-500 text-Black bg-lightBlue-200">
              <th className="px-6 py-3 border-b text-left">Batch</th>
              <th className="px-6 py-3 border-b border-blue-400 text-left">Practical no.</th>
                <th className="px-6 py-3 border-b border-blue-400 text-left">Roll No</th>
                <th className="px-6 py-3 border-b border-blue-400 text-left">Name</th>
                <th className="px-6 py-3 border-b border-blue-400 text-left">Performance</th>
                <th className="px-6 py-3 border-b border-blue-400 text-left">MCQs</th>
                <th className="px-6 py-3 border-b border-blue-400 text-left">attendence</th>
                <th className="px-6 py-3 border-b border-blue-400 text-left">Total</th>
               
              
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={index}
                  className={`transition-all duration-300 transform ${
                    index % 2 === 0 ? "bg-blue-50" : "bg-white"
                  } hover:bg-blue-100 hover:scale-105 hover:shadow-2xl`}
                >
                   <td className="px-6 py-4 border-b border-gray-200">{student.batch}</td>
                   <td className="px-6 py-4 border-b border-gray-200">{student.practical_no}</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-blue-800 font-medium">{student.roll_no}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{student.name}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{student.performance}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{student.performance}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{student.mcqs}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{student.attendance}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTable