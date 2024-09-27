import React, { useState } from 'react';

const TipsTop = () => {
  const [todo, setTodo] = useState(["Stay hydrated", "Take a break", "Exercise for 10 minutes"]);  // Initial list of tips
  const [tips,setTips] = useState([
    { id: 1, tip: "Set aside 15 minutes daily to read with your child." },
    { id: 2, tip: "Encourage your child to express their feelings." },
    { id: 3, tip: "Make time for outdoor play every day." },
    { id: 4, tip: "Establish a consistent bedtime routine." },
    { id: 5, tip: "Try to eat dinner together as a family." },
    { id: 6, tip: "Limit screen time to promote more active play." },
    { id: 7, tip: "Encourage your child to help with chores." },
    { id: 8, tip: "Have open discussions about school each day." },
    { id: 9, tip: "Model positive behavior and good manners." },
    { id: 10, tip: "Praise your child's efforts, not just results." },
    { id: 11, tip: "Create a cozy reading nook at home." },
    { id: 12, tip: "Promote creativity by providing art supplies." },
    { id: 13, tip: "Incorporate music into daily activities." },
    { id: 14, tip: "Help your child set and achieve small goals." },
    { id: 15, tip: "Discuss the importance of sharing and taking turns." },
    { id: 16, tip: "Encourage your child to explore their interests." },
    { id: 17, tip: "Teach your child how to help in the kitchen." },
    { id: 18, tip: "Encourage daily physical activity." },
    { id: 19, tip: "Discuss emotions and how to handle them." },
    { id: 20, tip: "Promote independence by allowing choices." },
    { id: 21, tip: "Create a family calendar to track activities." },
    { id: 22, tip: "Have a family game night once a week." },
    { id: 23, tip: "Introduce new foods to encourage healthy eating." },
    { id: 24, tip: "Practice gratitude by discussing things you’re thankful for." },
    { id: 25, tip: "Encourage your child to help with grocery shopping." },
    { id: 26, tip: "Limit sugary snacks and drinks." },
    { id: 27, tip: "Encourage your child to ask questions." },
    { id: 28, tip: "Provide opportunities for your child to socialize." },
    { id: 29, tip: "Teach your child about the importance of kindness." },
    { id: 30, tip: "Create a routine for homework and study time." },
    { id: 31, tip: "Use positive reinforcement to encourage good behavior." },
    { id: 32, tip: "Discuss the importance of honesty and trust." },
    { id: 33, tip: "Incorporate learning games into playtime." },
    { id: 34, tip: "Encourage storytelling and imagination." },
    { id: 35, tip: "Visit the library and explore new books." },
    { id: 36, tip: "Promote empathy by discussing feelings." },
    { id: 37, tip: "Teach your child about saving and spending." },
    { id: 38, tip: "Encourage participation in extracurricular activities." },
    { id: 39, tip: "Model stress management techniques." },
    { id: 40, tip: "Encourage questions about the world around them." },
    { id: 41, tip: "Discuss your family history and traditions." },
    { id: 42, tip: "Create a ‘special day’ just for your child." },
    { id: 43, tip: "Make a family scrapbook to cherish memories." },
    { id: 44, tip: "Limit distractions during family meals." },
    { id: 45, tip: "Discuss what makes a good friend." },
    { id: 46, tip: "Encourage your child to share their day with you." },
    { id: 47, tip: "Establish technology-free time zones." },
    { id: 48, tip: "Discuss the importance of helping others." },
    { id: 49, tip: "Incorporate problem-solving activities into play." },
    { id: 50, tip: "Encourage creativity through DIY projects." },
    { id: 51, tip: "Use teachable moments for life lessons." },
    { id: 52, tip: "Promote resilience by encouraging perseverance." },
    { id: 53, tip: "Teach your child how to express gratitude." },
    { id: 54, tip: "Encourage your child to try new things." },
    { id: 55, tip: "Foster curiosity by exploring nature." },
    { id: 56, tip: "Discuss your child’s favorite things regularly." },
    { id: 57, tip: "Model effective communication skills." },
    { id: 58, tip: "Set achievable goals for family outings." },
    { id: 59, tip: "Celebrate achievements, no matter how small." },
    { id: 60, tip: "Encourage sharing stories about family members." },
    { id: 61, tip: "Practice relaxation techniques together." },
    { id: 62, tip: "Provide consistent routines for security." },
    { id: 63, tip: "Discuss personal hygiene and its importance." },
    { id: 64, tip: "Encourage teamwork during family projects." },
    { id: 65, tip: "Share your interests with your child." },
    { id: 66, tip: "Teach your child about different cultures." },
    { id: 67, tip: "Promote responsibility through chores." },
    { id: 68, tip: "Discuss the importance of listening." },
    { id: 69, tip: "Encourage your child to be curious." },
    { id: 70, tip: "Set up a family volunteer day." },
    { id: 71, tip: "Create a calming space for relaxation." },
    { id: 72, tip: "Discuss environmental responsibility." },
    { id: 73, tip: "Encourage creative expression through music." },
    { id: 74, tip: "Establish a consistent wake-up routine." },
    { id: 75, tip: "Use role-play to teach social skills." },
    { id: 76, tip: "Promote kindness through random acts." },
    { id: 77, tip: "Encourage problem-solving through games." },
    { id: 78, tip: "Teach your child the value of patience." },
    { id: 79, tip: "Discuss what to do in emergencies." },
    { id: 80, tip: "Encourage creativity through free play." },
    { id: 81, tip: "Discuss the importance of respect." },
    { id: 82, tip: "Encourage daily reflections on their day." },
    { id: 83, tip: "Promote family discussions about values." },
    { id: 84, tip: "Discuss the importance of teamwork." },
    { id: 85, tip: "Encourage your child to share their opinions." },
    { id: 86, tip: "Help your child learn time management skills." },
    { id: 87, tip: "Encourage empathy by discussing feelings." },
    { id: 88, tip: "Promote healthy lifestyle choices." },
    { id: 89, tip: "Create fun challenges to promote learning." },
    { id: 90, tip: "Establish clear expectations for behavior." },
    { id: 91, tip: "Discuss the importance of gratitude." },
    { id: 92, tip: "Encourage kindness through sharing." },
    { id: 93, tip: "Help your child develop critical thinking." },
    { id: 94, tip: "Teach your child about setting boundaries." },
    { id: 95, tip: "Encourage daily acts of kindness." },
    { id: 96, tip: "Discuss the importance of being a good listener." },
    { id: 97, tip: "Encourage independence in small tasks." },
    { id: 98, tip: "Promote curiosity through exploration." },
    { id: 99, tip: "Encourage your child to dream big." },
    { id: 100, tip: "Foster a positive mindset through affirmations." }
  ])
  const getRandomValue = (array) => {
    if (array.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex].tip;
  };
  return (
    <div className='bg-white p-4 m-4 shadow-lg rounded-md'>
      <h1 className='text-black text-[30px] font-bold text-left'>Daily Digest🔥</h1>
      <h1 className='text-black text-[20px] font-bold text-left mb-2'>Daily tip:</h1>
      <p className='text-black text-center text-[20px] font-bold text-left mb-2' >"{getRandomValue(tips)} "</p>
      {todo.map((tip, index) => (
        <div key={index} className='flex items-center flex-row mb-2'>
            <div>

          <input type='checkbox' id={`tip-${index}`} className='mr-2' />
          <label htmlFor={`tip-${index}`} className='text-black text-[18px]'>{tip}</label>
            </div>
        </div>
      ))}
    </div>
  );
};

export default TipsTop;
