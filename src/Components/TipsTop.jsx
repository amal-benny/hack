import React, { useState } from 'react';

const TipsTop = () => {

    const getRandomValues = (array, count = 4) => {
        // Check if the array has fewer than the required number of elements
        if (array.length < count) {
          return array;  // Return the full array if there are less than 4 elements
        }
      
        // Shuffle the array using the Fisher-Yates algorithm
        const shuffledArray = array.slice(); // Create a copy of the array to avoid modifying the original
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
        }
      
        // Return the first 4 elements of the shuffled array
        return shuffledArray.slice(0, count);
      };
  const [todo, setTodo] = useState(getRandomValues([
    { id: 1, description: "Read a storybook together for 20 minutes." },
    { id: 2, description: "Take a walk in the park." },
    { id: 3, description: "Create an art project using colored paper." },
    { id: 4, description: "Play a board game as a family." },
    { id: 5, description: "Cook a simple meal together." },
    { id: 6, description: "Have a movie night with popcorn." },
    { id: 7, description: "Dance to your favorite songs." },
    { id: 8, description: "Visit a local museum or gallery." },
    { id: 9, description: "Plant flowers or vegetables in the garden." },
    { id: 10, description: "Build a fort with blankets and pillows." },
    { id: 11, description: "Do a simple science experiment at home." },
    { id: 12, description: "Organize a family game night." },
    { id: 13, description: "Make homemade pizza together." },
    { id: 14, description: "Create a scrapbook of family memories." },
    { id: 15, description: "Visit the library and pick out new books." },
    { id: 16, description: "Have a picnic in the backyard." },
    { id: 17, description: "Write letters to family members." },
    { id: 18, description: "Have a themed dress-up day." },
    { id: 19, description: "Practice yoga or meditation together." },
    { id: 20, description: "Go on a nature scavenger hunt." },
    { id: 21, description: "Create a family gratitude jar." },
    { id: 22, description: "Do a puzzle together." },
    { id: 23, description: "Make homemade ice cream." },
    { id: 24, description: "Have a family talent show." },
    { id: 25, description: "Go stargazing and identify constellations." },
    { id: 26, description: "Play hide and seek in the house." },
    { id: 27, description: "Take photos of each other and create a gallery." },
    { id: 28, description: "Make a family vision board." },
    { id: 29, description: "Try a new recipe together." },
    { id: 30, description: "Have a themed costume party." },
    { id: 31, description: "Create a family tree." },
    { id: 32, description: "Read a chapter book together." },
    { id: 33, description: "Do a craft using recycled materials." },
    { id: 34, description: "Visit a petting zoo or farm." },
    { id: 35, description: "Have a spa day at home." },
    { id: 36, description: "Write a short story together." },
    { id: 37, description: "Make friendship bracelets." },
    { id: 38, description: "Have a family dance-off." },
    { id: 39, description: "Create a time capsule." },
    { id: 40, description: "Play charades as a family." },
    { id: 41, description: "Explore a new hiking trail." },
    { id: 42, description: "Have a garage sale together." },
    { id: 43, description: "Build something with LEGO." },
    { id: 44, description: "Do a scavenger hunt in your neighborhood." },
    { id: 45, description: "Try out a new sport or activity." },
    { id: 46, description: "Create a comic strip together." },
    { id: 47, description: "Make homemade cards for friends." },
    { id: 48, description: "Go to a local fair or festival." },
    { id: 49, description: "Volunteer together for a community service." },
    { id: 50, description: "Write down positive affirmations." },
    { id: 51, description: "Create a family blog or vlog." },
    { id: 52, description: "Do a science project together." },
    { id: 53, description: "Try a new board game or card game." },
    { id: 54, description: "Have a backyard campfire." },
    { id: 55, description: "Go to the beach and build sandcastles." },
    { id: 56, description: "Start a family book club." },
    { id: 57, description: "Make a family recipe book." },
    { id: 58, description: "Play an outdoor sport together." },
    { id: 59, description: "Create a family playlist of favorite songs." },
    { id: 60, description: "Write and illustrate a children’s book." },
    { id: 61, description: "Make homemade crafts for a holiday." },
    { id: 62, description: "Have a photo shoot at home." },
    { id: 63, description: "Go on a local sightseeing tour." },
    { id: 64, description: "Start a garden and plant seeds together." },
    { id: 65, description: "Learn a new skill together (like knitting)." },
    { id: 66, description: "Host a family potluck dinner." },
    { id: 67, description: "Have a family discussion about goals." },
    { id: 68, description: "Create an obstacle course in your backyard." },
    { id: 69, description: "Write and send postcards to family." },
    { id: 70, description: "Make a documentary about your family." },
    { id: 71, description: "Participate in a local clean-up event." },
    { id: 72, description: "Try out new dance moves together." },
    { id: 73, description: "Plan a themed dinner night." },
    { id: 74, description: "Do a random act of kindness together." },
    { id: 75, description: "Create a bucket list for family activities." },
    { id: 76, description: "Go to a farmers' market and try new foods." },
    { id: 77, description: "Create a weather journal together." },
    { id: 78, description: "Write down your family’s traditions." },
    { id: 79, description: "Play a video game as a family." },
    { id: 80, description: "Make a scrapbook of current events." },
    { id: 81, description: "Create a family map with places you've been." },
    { id: 82, description: "Learn a few words in a new language." },
    { id: 83, description: "Create a DIY home project." },
    { id: 84, description: "Take a family photo in matching outfits." },
    { id: 85, description: "Have a family brainstorming session for future trips." },
    { id: 86, description: "Plan a surprise for another family member." },
    { id: 87, description: "Create a sensory bin for younger children." },
    { id: 88, description: "Do a family workout session." },
    { id: 89, description: "Play with bubbles outside." },
    { id: 90, description: "Set up a lemonade stand together." },
    { id: 91, description: "Make a time-lapse video of a family activity." },
    { id: 92, description: "Participate in a family talent swap." },
    { id: 93, description: "Create a family newsletter." },
    { id: 94, description: "Organize a neighborhood block party." },
    { id: 95, description: "Write down things that make you happy." },
    { id: 96, description: "Take part in a local sports event." },
    { id: 97, description: "Try a different cuisine at home." },
    { id: 98, description: "Explore different cultures through food." },
    { id: 99, description: "Plan a road trip itinerary." },
    { id: 100, description: "Create a family bucket list for the year." }
  ]));  // Initial list of tips
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
      <h1 className='text-black text-[30px] font-bold text-center'>Daily Digest🔥</h1>
      <h1 className='text-black text-[20px] font-bold text-left mb-2'>Daily tip:</h1>
      <p className='text-black text-center text-[20px] font-bold text-left mb-2' >"{getRandomValue(tips)} "</p>
      <h1 className='text-black text-[20px] font-bold text-left mb-2'>This weeks's tasks:</h1>
      {todo.map((tip, index) => (
        <div key={index} className='flex items-center flex-row mb-2'>
            <div>

          <input type='checkbox' id={`tip-${index}`} className='mr-2' />
          <label htmlFor={`tip-${index}`} className='text-black text-[18px]'>{tip.description}</label>
            </div>
        </div>
      ))}
    </div>
  );
};

export default TipsTop;
