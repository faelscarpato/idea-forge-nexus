
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: string;
  label: string;
  radius: number;
  color: string;
  group: number;
}

interface Link {
  source: string;
  target: string;
  strength: number;
}

const mockNodes: Node[] = [
  { id: '1', label: 'Inteligência Artificial', radius: 40, color: '#7c3aed', group: 1 },
  { id: '2', label: 'Machine Learning', radius: 35, color: '#8b5cf6', group: 1 },
  { id: '3', label: 'Colaboração', radius: 30, color: '#0d9488', group: 2 },
  { id: '4', label: 'Visualização de Dados', radius: 32, color: '#0d9488', group: 2 },
  { id: '5', label: 'Tomada de Decisão', radius: 28, color: '#1a365d', group: 3 },
  { id: '6', label: 'Blockchain', radius: 25, color: '#6366f1', group: 1 },
  { id: '7', label: 'Inovação Aberta', radius: 30, color: '#0d9488', group: 2 },
  { id: '8', label: 'Análise Preditiva', radius: 28, color: '#8b5cf6', group: 1 },
  { id: '9', label: 'Big Data', radius: 32, color: '#6366f1', group: 1 },
  { id: '10', label: 'Design Thinking', radius: 27, color: '#0d9488', group: 2 },
];

const mockLinks: Link[] = [
  { source: '1', target: '2', strength: 0.8 },
  { source: '1', target: '8', strength: 0.7 },
  { source: '1', target: '9', strength: 0.6 },
  { source: '2', target: '8', strength: 0.9 },
  { source: '2', target: '9', strength: 0.7 },
  { source: '3', target: '7', strength: 0.8 },
  { source: '3', target: '10', strength: 0.7 },
  { source: '4', target: '9', strength: 0.6 },
  { source: '5', target: '8', strength: 0.5 },
  { source: '6', target: '7', strength: 0.4 },
  { source: '7', target: '10', strength: 0.8 },
  { source: '8', target: '9', strength: 0.9 },
  { source: '1', target: '3', strength: 0.5 },
  { source: '5', target: '3', strength: 0.6 },
  { source: '4', target: '5', strength: 0.7 },
];

const KnowledgeGraph = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mock implementation - in a real app, this would use D3.js or a similar library
  // to properly implement force-directed graph
  useEffect(() => {
    // This is a simplified version - in a real application we would
    // implement a proper force-directed graph simulation
    const container = containerRef.current;
    if (!container) return;
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[500px] bg-gradient-to-br from-slate-50/50 to-white/30 dark:from-slate-900/50 dark:to-slate-800/30 rounded-xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
    >
      {/* Nodes */}
      {mockNodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="node absolute glass-card rounded-full flex items-center justify-center shadow-md"
          initial={{ 
            opacity: 0, 
            scale: 0.5, 
            x: Math.random() * 600 + 100, 
            y: Math.random() * 300 + 100
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: Math.cos(index * 0.8) * 220 + 300 + Math.random() * 50,
            y: Math.sin(index * 0.8) * 150 + 250 + Math.random() * 30
          }}
          transition={{ 
            delay: index * 0.1,
            duration: 1,
            type: "spring" 
          }}
          style={{ 
            width: `${node.radius * 2}px`, 
            height: `${node.radius * 2}px`,
            backgroundColor: `${node.color}20`,
            borderColor: node.color
          }}
          whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <span className="text-xs md:text-sm font-medium" style={{ color: node.color }}>
            {node.label}
          </span>
        </motion.div>
      ))}

      {/* This SVG simulates the links between nodes */}
      <svg className="absolute top-0 left-0 w-full h-full -z-10">
        {mockLinks.map((link, index) => {
          const source = mockNodes.find(node => node.id === link.source);
          const target = mockNodes.find(node => node.id === link.target);
          
          if (!source || !target) return null;
          
          const sourceX = Math.cos(mockNodes.findIndex(n => n.id === source.id) * 0.8) * 220 + 300 + Math.random() * 50;
          const sourceY = Math.sin(mockNodes.findIndex(n => n.id === source.id) * 0.8) * 150 + 250 + Math.random() * 30;
          
          const targetX = Math.cos(mockNodes.findIndex(n => n.id === target.id) * 0.8) * 220 + 300 + Math.random() * 50;
          const targetY = Math.sin(mockNodes.findIndex(n => n.id === target.id) * 0.8) * 150 + 250 + Math.random() * 30;
          
          return (
            <motion.line
              key={`${source.id}-${target.id}`}
              className="link"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.6, pathLength: 1 }}
              transition={{ delay: index * 0.05, duration: 1.5 }}
              x1={sourceX}
              y1={sourceY}
              x2={targetX}
              y2={targetY}
              strokeWidth={1 + link.strength}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default KnowledgeGraph;
