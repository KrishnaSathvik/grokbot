export type JobCategory =
  | "Everyday"
  | "Sales"
  | "Marketing"
  | "Support"
  | "Hiring"
  | "Money"
  | "Product"
  | "Technical"
  | "Personal";

/** How the job tends to run once it's set up. */
export type JobCadence = "one-off" | "recurring" | "monitoring";

/** How closely a person should stay in the loop. This guide's suggestion, read off each job's description — not an xAI label. */
export type JobOversight = "low" | "review" | "approval";

export interface Job {
  /** URL-safe id, unique across the catalogue; ready for a future /jobs/[slug] route. */
  slug: string;
  category: JobCategory;
  title: string;
  description: string;
  cadence: JobCadence;
  oversight: JobOversight;
}

export const JOB_CATEGORIES: JobCategory[] = [
  "Everyday",
  "Sales",
  "Marketing",
  "Support",
  "Hiring",
  "Money",
  "Product",
  "Technical",
  "Personal",
];

export const CADENCE_LABEL: Record<JobCadence, string> = {
  "one-off": "One-off",
  recurring: "Recurring",
  monitoring: "Monitoring",
};

export const OVERSIGHT_LABEL: Record<JobOversight, string> = {
  low: "Low",
  review: "Review",
  approval: "Approval",
};

const j = (
  category: JobCategory,
  slug: string,
  title: string,
  description: string,
  cadence: JobCadence,
  oversight: JobOversight,
): Job => ({ slug, category, title, description, cadence, oversight });

/**
 * Six good first jobs: repeatable, easy to review, nothing irreversible.
 * This guide's pick, in the order shown on the Jobs page.
 */
export const STARTER_JOB_SLUGS = [
  "inbox-helper",
  "morning-catch-up",
  "expenses",
  "meeting-prep",
  "watching-rivals",
  "company-research",
] as const;

export const JOBS: Job[] = [
  j("Everyday", "your-assistant", "Your assistant", "Reads through your messages, email, calendar and meeting notes, then tells you what's new, why it matters and what to do about it.", "recurring", "low"),
  j("Everyday", "morning-catch-up", "Morning catch-up", "A short briefing to start the day, and an instant summary whenever you're pulled into a conversation halfway through.", "recurring", "low"),
  j("Everyday", "inbox-helper", "Inbox helper", "Sorts your email into sensible piles, points out what's urgent, and writes the replies. You still press send.", "recurring", "review"),
  j("Everyday", "news-filter", "News filter", "Cuts the day's noise down to the few stories that actually matter to you.", "recurring", "low"),
  j("Everyday", "to-do-keeper", "To-do keeper", "Collects every loose promise from documents, meetings and chats into one list, with a morning reminder.", "recurring", "low"),
  j("Everyday", "slide-maker", "Slide maker", "Builds presentations using your own template, so you never start from a blank slide.", "one-off", "review"),
  j("Sales", "finding-customers", "Finding customers", "Looks up companies overnight, works out who's worth contacting, writes the emails in your voice, and leaves them for you to approve.", "recurring", "approval"),
  j("Sales", "company-research", "Company research", "Digs into a company before you speak to them and puts together a short briefing you can share.", "one-off", "low"),
  j("Sales", "pipeline-check", "Pipeline check", "Tidies your records, points out deals that have gone quiet, and leaves a Monday morning scoreboard.", "recurring", "low"),
  j("Sales", "record-keeping", "Record keeping", "Keeps customer records and contact lists up to date before and after meetings, so nobody has to do it by hand.", "recurring", "low"),
  j("Sales", "meeting-prep", "Meeting prep", "Gathers who's in the room, what was said last time, what's still open, and a suggested agenda.", "recurring", "low"),
  j("Sales", "deal-paperwork", "Deal paperwork", "Writes up the internal notes for a deal from past emails and calls, then files them once you say yes.", "one-off", "approval"),
  j("Sales", "slide-updates", "Slide updates", "Updates the deck with what you just heard on the call, with next steps already on the slide.", "one-off", "review"),
  j("Sales", "renewals", "Renewals", "Puts together everything you need before a renewal conversation and drafts the note to the customer.", "one-off", "review"),
  j("Sales", "call-coaching", "Call coaching", "Listens back to your calls and leaves notes on what went well and what to try next time.", "recurring", "low"),
  j("Sales", "weekly-call-list", "Weekly call list", "Builds the week's list of people to contact, with their details already filled in.", "recurring", "low"),
  j("Marketing", "ad-budgets", "Ad budgets", "Watches how campaigns are doing, suggests moving money between them, and waits for your yes before changing anything.", "monitoring", "approval"),
  j("Marketing", "ad-ideas", "Ad ideas", "Spots which ads are quietly working, explains why, and suggests what to try next.", "monitoring", "low"),
  j("Marketing", "watching-rivals", "Watching rivals", "Keeps an eye on what competitors launch, and checks your own site for anything gone stale.", "monitoring", "low"),
  j("Marketing", "search-visibility", "Search visibility", "Tracks whether people are finding you, flags what's broken, and hands back a list of fixes.", "monitoring", "low"),
  j("Marketing", "social-posts", "Social posts", "Learns how you write, drafts posts when something worth sharing happens, and keeps the queue full.", "recurring", "review"),
  j("Marketing", "newsletter", "Newsletter", "Gathers the month's news and writes the issue in your voice, ready for one editing pass.", "recurring", "review"),
  j("Marketing", "company-announcements", "Company announcements", "Writes clear internal updates from what's actually going on, matched to who's reading.", "one-off", "review"),
  j("Marketing", "content-calendar", "Content calendar", "Keeps the plan for posts, launches and events in one place and up to date.", "recurring", "low"),
  j("Marketing", "lead-campaigns", "Lead campaigns", "Keeps ads, sign-up forms and follow-up messages consistent, drafting each campaign for approval.", "recurring", "approval"),
  j("Marketing", "reasons-to-reach-out", "Reasons to reach out", "Watches for news at companies you care about — awards, launches, hiring — and tells you when it's worth saying something.", "monitoring", "low"),
  j("Marketing", "community", "Community", "Handles applications and messages across your channels and keeps in touch on a regular rhythm.", "recurring", "review"),
  j("Marketing", "guest-list", "Guest list", "Scores people applying to your event and waves the right ones through.", "recurring", "review"),
  j("Marketing", "merchandise", "Merchandise", "Runs the outreach, checks who claimed what, and sends the supplier a daily list.", "recurring", "review"),
  j("Support", "customer-health", "Customer health", "Watches how customers are using things and turns the noise into a short watch list.", "monitoring", "low"),
  j("Support", "account-care", "Account care", "Preps every call from past notes and conversations, writes the follow-ups, and keeps next steps current.", "recurring", "review"),
  j("Support", "ticket-sorting", "Ticket sorting", "Checks the support queue regularly, drafts replies, and stays quiet when there's nothing to do.", "monitoring", "review"),
  j("Support", "sending-materials", "Sending materials", "Finds the recording or the document someone asked for, tidies it up, and writes the reply with the links in.", "one-off", "review"),
  j("Hiring", "finding-candidates", "Finding candidates", "Searches overnight, writes the first message in your voice, skips anyone you've already spoken to, and books the interviews.", "recurring", "review"),
  j("Hiring", "first-screen", "First screen", "Reads applications and work samples against your bar and hands back a shortlist.", "one-off", "review"),
  j("Hiring", "new-starters", "New starters", "Builds the joining checklist, gathers the right documents, and answers first-day questions.", "one-off", "low"),
  j("Hiring", "scheduling", "Scheduling", "Finds a slot everyone can make, then chases the people who haven't replied.", "one-off", "low"),
  j("Money", "expenses", "Expenses", "Builds the weekly summary, files receipts that arrive by email, and nudges people who haven't tagged theirs.", "recurring", "low"),
  j("Money", "invoices", "Invoices", "Keeps invoices moving, matches what it can, and only raises the ones that need a person.", "recurring", "review"),
  j("Money", "contracts", "Contracts", "Shows you the week's paperwork at a glance — where each one is, who has it, what's stuck.", "monitoring", "low"),
  j("Money", "supplier-accounts", "Supplier accounts", "Handles renewals and seat changes on supplier websites and only reports back the odd ones.", "recurring", "approval"),
  j("Money", "long-forms", "Long forms", "Fills in those endless questionnaires from your past answers and leaves the submit button to you.", "one-off", "approval"),
  j("Product", "feedback", "Feedback", "Gathers what customers are saying from everywhere, groups it, and suggests what to do first.", "recurring", "low"),
  j("Product", "who-asked-for-it", "Who asked for it", "Keeps a running list of requests tied to the customers who made them.", "monitoring", "low"),
  j("Product", "help-pages", "Help pages", "Checks your guides against what actually changed and rewrites the parts that are out of date.", "recurring", "review"),
  j("Product", "new-feature-uptake", "New feature uptake", "Shows who's actually trying something new, so the team knows who to follow up with.", "monitoring", "low"),
  j("Product", "common-questions", "Common questions", "Notices the questions that keep coming up on calls and links back to where they were answered.", "monitoring", "low"),
  j("Technical", "recreating-problems", "Recreating problems", "Follows the exact steps a customer described, records what goes wrong, and writes it up with screenshots.", "one-off", "low"),
  j("Technical", "speed-checks", "Speed checks", "Looks at what's running slowly and comes back with a short, readable summary.", "one-off", "low"),
  j("Technical", "trying-to-break-it", "Trying to break it", "Clicks through your product the way an awkward customer would and reports everything that falls over.", "one-off", "low"),
  j("Technical", "quick-mock-ups", "Quick mock-ups", "Turns an idea into something you can click on and sends you the link.", "one-off", "review"),
  j("Technical", "keeping-jobs-moving", "Keeping jobs moving", "Starts the long-running jobs, watches them, chases whatever gets stuck, and summarises the lot.", "monitoring", "low"),
  j("Personal", "travel", "Travel", "Compares flights and hotels against your preferences, checks with you, then books and adds it to your calendar.", "one-off", "approval"),
  j("Personal", "flat-hunting", "Flat hunting", "Filters new listings, emails to arrange viewings, and applies for the ones you like.", "monitoring", "approval"),
  j("Personal", "subscriptions", "Subscriptions", "Finds what you're quietly paying for, suggests what to cut, and cancels whatever you approve.", "one-off", "approval"),
  j("Personal", "personal-website", "Personal website", "Puts together a simple site from a description and sorts out the address, leaving you something live to edit.", "one-off", "review"),
];

export const STARTER_JOBS: Job[] = STARTER_JOB_SLUGS.map((slug) => {
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) throw new Error(`Unknown starter job: ${slug}`);
  return job;
});

export function jobBySlug(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}
