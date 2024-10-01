import React, { useState } from 'react';

const AccordionItem = ({ title, todos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <div
        className="p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <h3 className="font-bold text-lg text-black">{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white">
          {todos.map((todo, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`todo-${index}`}
                className="mr-2"
                defaultChecked={todo.completed}
              />
              <label htmlFor={`todo-${index}`} className="text-gray-600">
                {todo.text}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Milestone = () => {
    const accordionData = [
        {
          title: 'Learning and Education',
          todos: [
            { text: 'Complete math homework', completed: false },
            { text: 'Read for 30 minutes', completed: true },
            { text: 'Practice piano for 20 minutes', completed: false }
          ]
        },
        {
          title: 'Personal Development',
          todos: [
            { text: 'Help with household chores', completed: false },
            { text: 'Practice mindfulness for 10 minutes', completed: true },
            { text: 'Set up a reading corner in the room', completed: false }
          ]
        },
        {
          title: 'Physical Activities',
          todos: [
            { text: 'Play outside for 1 hour', completed: false },
            { text: 'Go for a walk with family', completed: true },
            { text: 'Try a new sport', completed: false }
          ]
        },
        {
          title: 'Healthy Habits',
          todos: [
            { text: 'Brush teeth twice a day', completed: true },
            { text: 'Eat 5 servings of fruits and vegetables', completed: false },
            { text: 'Drink 8 glasses of water', completed: false }
          ]
        }
      ];

  return (
    <div className="max-w-md mx-auto h-screen mt-8">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} todos={item.todos} />
      ))}
    </div>
  );
};

export default Milestone;
