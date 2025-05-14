
export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  description: string;
  dueDate: string;
  assignee: string;
  tags: string[];
  activity: {
    timestamp: string;
    action: string;
    user: string;
  }[];
}

export const tasks: Task[] = [
  {
    id: "task-1",
    title: "Implement user authentication",
    status: "in-progress",
    priority: "high",
    description: "Create a secure authentication system with email verification and password recovery functionality. Should support OAuth providers like Google and GitHub.",
    dueDate: "2025-05-20",
    assignee: "Alex Johnson",
    tags: ["security", "frontend", "backend"],
    activity: [
      {
        timestamp: "2025-05-10T14:23:00Z",
        action: "Created task",
        user: "Maria Garcia"
      },
      {
        timestamp: "2025-05-11T09:45:00Z",
        action: "Started implementation",
        user: "Alex Johnson"
      },
      {
        timestamp: "2025-05-12T11:30:00Z",
        action: "Updated description",
        user: "Maria Garcia"
      }
    ]
  },
  {
    id: "task-2",
    title: "Design homepage layout",
    status: "done",
    priority: "medium",
    description: "Create a modern, responsive homepage design that showcases our product features and drives conversion. Should include hero section, features, testimonials, and pricing.",
    dueDate: "2025-05-08",
    assignee: "Sophia Chen",
    tags: ["design", "frontend"],
    activity: [
      {
        timestamp: "2025-05-05T10:15:00Z",
        action: "Created task",
        user: "Marcus Lee"
      },
      {
        timestamp: "2025-05-06T13:20:00Z",
        action: "Added mockups",
        user: "Sophia Chen"
      },
      {
        timestamp: "2025-05-08T17:05:00Z",
        action: "Marked as complete",
        user: "Sophia Chen"
      }
    ]
  },
  {
    id: "task-3",
    title: "Optimize database queries",
    status: "todo",
    priority: "high",
    description: "Review and optimize the most resource-intensive database queries to improve application performance. Focus on reducing load times for the dashboard and analytics pages.",
    dueDate: "2025-05-22",
    assignee: "David Kumar",
    tags: ["backend", "performance"],
    activity: [
      {
        timestamp: "2025-05-09T08:30:00Z",
        action: "Created task",
        user: "Marcus Lee"
      }
    ]
  },
  {
    id: "task-4",
    title: "Write API documentation",
    status: "todo",
    priority: "medium",
    description: "Create comprehensive documentation for our public API using OpenAPI specification. Include authentication details, endpoint descriptions, request/response examples, and error codes.",
    dueDate: "2025-05-18",
    assignee: "Maria Garcia",
    tags: ["documentation", "backend"],
    activity: [
      {
        timestamp: "2025-05-08T15:45:00Z",
        action: "Created task",
        user: "Marcus Lee"
      },
      {
        timestamp: "2025-05-09T11:20:00Z",
        action: "Updated priority",
        user: "Marcus Lee"
      }
    ]
  },
  {
    id: "task-5",
    title: "Implement dark mode",
    status: "in-progress",
    priority: "low",
    description: "Add a dark mode option to the application that respects user preference and can be toggled from the settings menu. Ensure all components have appropriate styling for both light and dark themes.",
    dueDate: "2025-05-25",
    assignee: "Sophia Chen",
    tags: ["design", "frontend", "accessibility"],
    activity: [
      {
        timestamp: "2025-05-07T09:10:00Z",
        action: "Created task",
        user: "Maria Garcia"
      },
      {
        timestamp: "2025-05-10T14:30:00Z",
        action: "Started implementation",
        user: "Sophia Chen"
      }
    ]
  },
  {
    id: "task-6",
    title: "Fix checkout payment issues",
    status: "in-progress",
    priority: "high",
    description: "Investigate and resolve the intermittent payment processing errors occurring during checkout. Focus on the integration with Stripe and error handling for declined transactions.",
    dueDate: "2025-05-14",
    assignee: "Alex Johnson",
    tags: ["bug", "frontend", "payments"],
    activity: [
      {
        timestamp: "2025-05-11T16:05:00Z",
        action: "Created task",
        user: "Marcus Lee"
      },
      {
        timestamp: "2025-05-12T08:45:00Z",
        action: "Started investigation",
        user: "Alex Johnson"
      }
    ]
  },
  {
    id: "task-7",
    title: "Implement analytics dashboard",
    status: "todo",
    priority: "medium",
    description: "Create a comprehensive analytics dashboard showing key performance indicators, user engagement metrics, and business insights using data visualization libraries.",
    dueDate: "2025-05-30",
    assignee: "David Kumar",
    tags: ["frontend", "data", "analytics"],
    activity: [
      {
        timestamp: "2025-05-09T13:15:00Z",
        action: "Created task",
        user: "Maria Garcia"
      }
    ]
  },
  {
    id: "task-8",
    title: "Conduct user testing for new features",
    status: "todo",
    priority: "medium",
    description: "Organize and conduct usability testing sessions with representative users to gather feedback on the recently implemented features. Document findings and prioritize improvements.",
    dueDate: "2025-05-28",
    assignee: "Maria Garcia",
    tags: ["user-research", "testing"],
    activity: [
      {
        timestamp: "2025-05-12T10:30:00Z",
        action: "Created task",
        user: "Marcus Lee"
      }
    ]
  }
];
