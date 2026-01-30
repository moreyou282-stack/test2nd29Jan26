export const scenarios = [
  {
    id: 1,
    title: "The 'Senior' Resistance",
    context: "You are a new HR Intern at a 1200-employee manufacturing firm in Tan Binh District. You've been asked to roll out a new digital attendance system. Mr. Hung, a production manager with 15 years of experience, refuses to use it, saying 'My team is too busy for apps'.",
    question: "How do you handle Mr. Hung's resistance?",
    options: [
      {
        text: "Report him to the HR Director immediately for non-compliance.",
        eqScore: -5,
        feedback: "Escalating immediately damages trust. In Vietnam's corporate culture, saving face for seniors is crucial. You just made an enemy.",
        type: "Aggressive"
      },
      {
        text: "Ignore his team for now and focus on other departments.",
        eqScore: 0,
        feedback: "Avoidance resolves nothing. The policy needs 100% adoption. You missed a chance to demonstrate leadership.",
        type: "Passive"
      },
      {
        text: "Invite Mr. Hung for coffee, listen to his concerns, and offer a simplified demo for his team.",
        eqScore: 10,
        feedback: "Excellent! 'Cafe culture' is a powerful tool in HCMC. You showed respect (Empathy) and offered a solution that addresses his pain point (Efficiency).",
        type: "Assertive/Empathetic"
      },
      {
        text: "Send a company-wide email reminding everyone of the penalties for not using the app.",
        eqScore: -3,
        feedback: "Public shaming or threat is very ineffective and creates a toxic atmosphere.",
        type: "Passive-Aggressive"
      }
    ]
  },
  {
    id: 2,
    title: "The OT Conflict",
    context: "It's near Tet holiday. The logistics team is overwhelmed. One key employee, Lan, comes to you crying, saying she can't work OT anymore because of family commitments, but her manager threatens to cut her bonus.",
    question: "What is your immediate action?",
    options: [
      {
        text: "Tell the manager he is breaking labor laws and demand he stop.",
        eqScore: 2,
        feedback: "Technically correct, but too confrontational. You need to solve the business problem too, not just be a 'police officer'.",
        type: "Aggressive"
      },
      {
        text: " Comfort Lan and advise her to just do her best.",
        eqScore: -2,
        feedback: "Sympathy is not empathy. You didn't solve her problem or the manager's resource issue.",
        type: "Passive"
      },
      {
        text: "Facilitate a private meeting. Validate Lan's struggle, then work with the manager to find temporary support staff.",
        eqScore: 10,
        feedback: "Perfect. You acted as a mediator. You validated emotions (EQ) and proposed a practical resource solution (IQ).",
        type: "Collaborative"
      }
    ]
  },
  {
    id: 3,
    title: "The Rumor Mill",
    context: "You hear a rumor in the break room that the company is about to lay off 10% of the staff. Employees are anxious and productivity is dropping. You know it's fake news.",
    question: "What do you do?",
    options: [
      {
        text: "Send a mass email denying the rumor.",
        eqScore: 5,
        feedback: "Good, but official emails can sometimes make people more suspicious ('Why are they denying it?').",
        type: "Direct"
      },
      {
        text: "Ignore it. Rumors die out.",
        eqScore: -5,
        feedback: "In large HCMC companies, rumors spread fast via Zalo groups. Ignoring it allows anxiety to fester.",
        type: "Passive"
      },
      {
        text: "Identify key opinion leaders (KOLs) in the office and casually correct the info during informal chats, while preparing an official transparency update.",
        eqScore: 10,
        feedback: "Strategic! managing the 'informal network' is key in large Vietnamese organizations.",
        type: "Strategic/Social Awareness"
      }
    ]
  }
];
