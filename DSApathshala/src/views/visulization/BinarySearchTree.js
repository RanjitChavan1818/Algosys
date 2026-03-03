import React from "react";
import { useState } from "react";

// components
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardStats from "components/Cards/CardStats.js";
// import algorithm from "../../assets/img/pratical11.png"

const Node = (props) => {
  const { value, x, y } = props;
  return (
    <div
      className="absolute flex justify-center items-center w-10 h-10 border-2 border-green-500 bg-green-100 rounded-full font-bold text-green-600"
      style={{ left: `${x}px`, top: `${y}px`, transform: "translate(-50%, -50%)" }}
    >
      {value}
    </div>
  );
};

const Edge = (props) => {
  const { x1, y1, x2, y2, color = "green" } = props;
  const nodeRadius = 18; // Radius of the circular nodes

  // Calculate the angle between the two nodes
  const angle = Math.atan2(y2 - y1, x2 - x1);

  // Adjust the starting and ending points of the edge
  const adjustedX1 = x1 + nodeRadius * Math.cos(angle);
  const adjustedY1 = y1 + nodeRadius * Math.sin(angle);
  const adjustedX2 = x2 - nodeRadius * Math.cos(angle);
  const adjustedY2 = y2 - nodeRadius * Math.sin(angle);

  // Calculate the new length of the edge
  const newLength = Math.sqrt(
    Math.pow(adjustedX2 - adjustedX1, 2) + Math.pow(adjustedY2 - adjustedY1, 2)
  );

  return (
    <div
      className="absolute"
      style={{
        left: `${adjustedX1}px`,
        top: `${adjustedY1}px`,
        width: `${newLength}px`,
        height: "2px",
        backgroundColor: color,
        transformOrigin: "0 0",
        transform: `rotate(${angle * (180 / Math.PI)}deg)`,
      }}
    />
  );
};


export default function BinarySearchTree() {
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BST {
    constructor() {
      this.root = null;
    }

    insert(value) {
      const newNode = new TreeNode(value);
      let inserted = false;
      if (!this.root) {
        this.root = newNode;
        return { node: newNode, direction: "root" };
      }
      let current = this.root;
      while (!inserted) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            inserted = true;
            return { node: newNode, direction: "left" };
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            inserted = true;
            return { node: newNode, direction: "right" };
          }
          current = current.right;
        }
      }
    }

    inorder(node, result = []) {
      if (node) {
        this.inorder(node.left, result);
        result.push(node.value);
        this.inorder(node.right, result);
      }
      return result;
    }

    preorder(node, result = []) {
      if (node) {
        result.push(node.value);
        this.preorder(node.left, result);
        this.preorder(node.right, result);
      }
      return result;
    }

    postorder(node, result = []) {
      if (node) {
        this.postorder(node.left, result);
        this.postorder(node.right, result);
        result.push(node.value);
      }
      return result;
    }
  }

  const [bst] = useState(new BST());
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [output, setOutput] = useState("");
  const [edgeColor, setEdgeColor] = useState("green");
  const [lastInsertion, setLastInsertion] = useState("");

  const visualizeTree = (node, x = 300, y = 30, dx = 150, edgeList = [], nodeList = []) => {
    if (!node) return;
    nodeList.push({ value: node.value, x, y });
    
    const edgeColor = node.left ? "blue" : "red"; // Example: blue for left, red for right

    if (node.left) {
      const leftX = x - dx;
      const leftY = y + 60;
      edgeList.push({ x1: x, y1: y, x2: leftX, y2: leftY, color: edgeColor });
      visualizeTree(node.left, leftX, leftY, dx / 1.5, edgeList, nodeList);
    }
    
    if (node.right) {
      const rightX = x + dx;
      const rightY = y + 60;
      edgeList.push({ x1: x, y1: y, x2: rightX, y2: rightY, color: edgeColor });
      visualizeTree(node.right, rightX, rightY, dx / 1.5, edgeList, nodeList);
    }
    
    setNodes(nodeList);
    setEdges(edgeList);
  };

  const handleInsert = () => {
    const value = parseInt(document.getElementById("node-value").value);
    if (!isNaN(value)) {
      const { node, direction } = bst.insert(value);
      visualizeTree(bst.root);
      setLastInsertion(`Inserted ${value} to the ${direction}`);
      document.getElementById("node-value").value = "";
    }
  };

  const handleClear = () => {
    bst.root = null;
    setNodes([]);
    setEdges([]);
    setOutput("");
    setLastInsertion("");
  };

  const handleTraversal = (type) => {
    let result = [];
    if (type === "inorder") result = bst.inorder(bst.root);
    if (type === "preorder") result = bst.preorder(bst.root);
    if (type === "postorder") result = bst.postorder(bst.root);
    setOutput(`${type.charAt(0).toUpperCase() + type.slice(1)} Traversal: ${result.join(", ")}`);
  };

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <a
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="/admin/dashboard/theory">
                <CardStats
                  statTitle="Theory"
                  statDescripiron="Practical 11 - Tree traversal methods"
                  statIconName="far fa-file"
                  statIconColor="bg-red-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="/editor">
                <CardStats
                  statTitle="Visualization"
                  statDescripiron="More visualization comming soon!!"
                  statIconName="fas fa-chart-bar"
                  statIconColor="bg-orange-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="#">
                <CardStats
                  statTitle="Code Editor"
                  statDescripiron="Practice by writing the code!"
                  statIconName="fas fa-laptop-code"
                  statIconColor="bg-pink-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="#">
                <CardStats
                  statTitle="MCQ's"
                  statDescripiron="Solve the MCQ!!"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      
      {/* Visualization part*/}
      <div className="p-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">

            {/* Visualization Buttons*/}
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
              <div className="rounded-t px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                      Visualization
                    </h6>
                    <h2 className="text-white text-xl font-semibold">Binary Search Tree</h2>
                    <div className="my-4 flex items-center justify-start gap-4">
                    <input
                      type="text"
                      id="node-value"
                      placeholder="Enter node value"
                      className="p-2 border rounded"
                    />
                    <button
                      className="p-2 bg-red-500 text-white rounded m-2"style={{backgroundColor:'#457b7b'}}
                      onClick={handleInsert}
                    >
                      Insert Node
                    </button>
                    <button
                      className="mx-2 p-2 bg-red-500 text-white rounded"style={{backgroundColor:'#457b7b'}}
                      onClick={handleClear}
                    >
                      Clear Tree
                    </button>
                    </div>
                    <div className="mt-4 mr-4 items-center justify-center">
                      <button
                        className="mx-2 p-2 bg-yellow-500 text-white rounded mr-2"style={{backgroundColor:'#457b7b'}}
                        onClick={() => handleTraversal("inorder")}
                      >
                        Inorder Traversal
                      </button>
                      <button
                        className="mx-2 p-2 bg-yellow-500 text-white rounded mr-2"style={{backgroundColor:'#457b7b'}}
                        onClick={() => handleTraversal("preorder")}
                      >
                        Preorder Traversal
                      </button>
                      <button
                        className="mx-2 p-2 bg-yellow-500 text-white rounded"style={{backgroundColor:'#457b7b'}}
                        onClick={() => handleTraversal("postorder")}
                      >
                        Postorder Traversal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-auto">
                <div className="relative h-350-px">
                  {/* Visualization window */}
                    <div
                      className="relative border text-white rounded p-4"
                      style={{ height: '350px', width: '1000px' }}
                    >
                      {edges.map((edge, idx) => (
                        <Edge key={idx} {...edge} color={edgeColor} />
                      ))}
                      {nodes.map((node, idx) => (
                        <Node key={idx} {...node} />
                      ))}
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Steps Displaying */}
          <div className="w-full xl:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" style={{height:"95%"}}>
              <div className="rounded-t mb-0 px-4 py-3     bg-transparent">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                      Performance
                    </h6>
                    <h2 className="text-blueGray-700 text-xl font-semibold">
                      Insertion Status
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-auto">
                {/* Chart */}
                <div className="relative h-350-px">
                <p className="text-gray-700 mt-4">
                  {lastInsertion ? lastInsertion : 'No element inserted yet.'}
                  </p>
                  <p className="mt-2 text-gray-600">{output}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest part of code */}
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <span className="text-3xl m-2 font-bold">
            Algorithm
          </span>
          {/* <img src={algorithm} alt="Algorithm Image" className="rounded-lg mt-2"/> */}
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div>
        </div>
      </div>
    </>
  );
}