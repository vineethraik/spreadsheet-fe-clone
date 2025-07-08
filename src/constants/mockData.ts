// "use client";
// import type { JSX } from "react";

export interface Column {
  type: string;
  accessor?: string;
  columns?: Array<Column>;
  headerData: HeaderData;
  cellData?: CellData;
}

export interface HeaderData {
  text?: string;
  sortable?: boolean;
  prefix_icon_id?: string;
  prefix_icon_style?: React.CSSProperties;
  style?: React.CSSProperties;
  className?: string;
  enableMoreOptions?: boolean;
  enableFilter?: boolean;
  allowRefresh?: boolean;
}

export interface CellData {
  type?: string;
  style?: React.CSSProperties;
  className?: string;
  value?: string | number;
  valueFn?: (info: object, i: number) => string | number;
}

export interface Data {
  [key: string]: {
    type?: string;
    value: string | number;
  };
}

export interface PageData {
  id: string;
  title: string;
  table: {
    columnData: Array<Column>;
    data: Array<Data>;
  };
}

export const mockData: { pages: Array<PageData> } = {
  pages: [
    {
      id: "all_orders",
      title: "All Orders",
      table: {
        columnData: [
          {
            type: "header_text",
            // accessor: (_row: object, i: number) => `${i + 1}`,
            headerData: {
              prefix_icon_id: "hash_tag",
              // prefix_icon_style: { height: "20px", width: "20px" },
              style: { height: "32px",width: "32px" },

              sortable: false,
            },
            cellData: {
              type: "row_number",
              valueFn: (_, i) => `${i + 1}`,
            },
          },
          {
            type: "link_to_sheet",
            columns: [
              {
                type: "header_text",
                accessor: "job_request",
                headerData: {
                  text: "Job Request",
                  sortable: true,
                  prefix_icon_id: "job",
                },
                cellData: {
                  type: "text",
                },
              },
              {
                type: "header_text",
                accessor: "submitted_on",
                headerData: {
                  text: "Submitted",
                  sortable: true,
                  prefix_icon_id: "calender",
                },
                cellData: {
                  type: "date",
                },
              },
              {
                type: "header_text",
                accessor: "status",
                headerData: {
                  text: "Status",
                  sortable: true,
                  prefix_icon_id: "in_fill_down_arrow",
                },
                cellData: {
                  type: "status",
                },
              },
              {
                type: "header_text",
                accessor: "submitter",
                headerData: {
                  text: "Submitter",
                  sortable: true,
                  prefix_icon_id: "avatar",
                },
                cellData: {
                  type: "text",
                },
              },
            ],
            headerData: {
              sortable: false,
              prefix_icon_id: "link",
              text: "Q3 Financial Overview",
              allowRefresh: true,
            },
          },
          {
            type: "header_text",
            accessor: "url",
            headerData: {
              prefix_icon_id: "globe",
              text: "URL",
              sortable: true,
            },
            cellData: {
              type: "url",
            },
          },
          {
            type: "action_text",
            columns: [
              {
                type: "header_text",
                accessor: "assigned_to",
                headerData: {
                  prefix_icon_id: "emoji_hi_five",
                  style: { backgroundColor: "#E8F0E9" },
                  sortable: false,
                  text: "Assigned",
                },
                cellData: {
                  type: "text",
                },
              },
            ],
            headerData: {
              prefix_icon_id: "downward_forked_arrow_gray",
              sortable: false,
              text: "ABC",
              style: { backgroundColor: "#D2E0D4" },
              enableMoreOptions: true,
            },
          },
          {
            type: "action_text",
            columns: [
              {
                type: "header_text",
                accessor: "priority",
                headerData: {
                  sortable: false,
                  text: "Priority",
                  style: { backgroundColor: "#EAE3FC" },
                },
                cellData: {
                  type: "priority",
                },
              },
              {
                type: "header_text",
                accessor: "due_date",
                headerData: {
                  sortable: false,
                  text: "Due Date",
                  style: { backgroundColor: "#EAE3FC" },
                },
                cellData: {
                  type: "date",
                },
              },
            ],
            headerData: {
              prefix_icon_id: "downward_forked_arrow_white",
              sortable: false,
              text: "Answer a question",
              style: { backgroundColor: "#DCCFFC" },
              enableMoreOptions: true,
            },
          },
          {
            type: "action_text",
            columns: [
              {
                type: "header_text",
                accessor: "estimate_value",
                headerData: {
                  sortable: false,
                  text: "Est. Value",
                  style: { backgroundColor: "#FFE9E0" },
                },
                cellData: {
                  type: "currency",
                },
              },
            ],
            headerData: {
              prefix_icon_id: "downward_forked_arrow_white",
              sortable: false,
              text: "Extract",
              style: { backgroundColor: "#FAC2AF" },
              enableMoreOptions: true,
            },
          },
        ],
        data: [
          {
            job_request: {
              value: "Launch social media campaign for product XYZ",
            },
            submitted_on: {
              value: "15-11-2024",
            },
            status: {
              value: "in_progress",
            },
            submitter: {
              value: "Aisha Patel",
            },
            url: {
              value: "www.aishapatel.com",
            },
            assigned_to: {
              value: "Sophie Choudhury",
            },
            priority: {
              value: "medium",
            },
            due_date: {
              value: "20-11-2024",
            },
            estimate_value: {
              value: 6200000,
            },
          },
          {
            job_request: {
              value: "Update press kit for company redesign",
            },
            submitted_on: {
              value: "28-10-2024",
            },
            status: {
              value: "need_to_start",
            },
            submitter: {
              value: "Irfan Khan",
            },
            url: {
              value: "www.irfankhanportfolio.com",
            },
            assigned_to: {
              value: "Tejas Pandey",
            },
            priority: {
              value: "high",
            },
            due_date: {
              value: "30-10-2024",
            },
            estimate_value: {
              value: 3500000,
            },
          },
          {
            job_request: {
              value: "Finalize user testing feedback for app update",
            },
            submitted_on: {
              value: "05-12-2024",
            },
            status: {
              value: "in_progress",
            },
            submitter: {
              value: "Mark Johnson",
            },
            url: {
              value: "www.markjohnsondesigns.com",
            },
            assigned_to: {
              value: "Rachel Lee",
            },
            priority: {
              value: "medium",
            },
            due_date: {
              value: "10-12-2024",
            },
            estimate_value: {
              value: 4750000,
            },
          },
          {
            job_request: {
              value: "Design new features for the website",
            },
            submitted_on: {
              value: "10-01-2025",
            },
            status: {
              value: "complete",
            },
            submitter: {
              value: "Emily Green",
            },
            url: {
              value: "www.emilygreenart.com",
            },
            assigned_to: {
              value: "Tom Wright",
            },
            priority: {
              value: "low",
            },
            due_date: {
              value: "15-01-2025",
            },
            estimate_value: {
              value: 5900000,
            },
          },
          {
            job_request: {
              value: "Prepare financial report for Q4",
            },
            submitted_on: {
              value: "25-01-2025",
            },
            status: {
              value: "blocked",
            },
            submitter: {
              value: "Jessica Brown",
            },
            url: {
              value: "www.jessicabrowncreative.com",
            },
            assigned_to: {
              value: "Kevin Smith",
            },
            priority: {
              value: "low",
            },
            due_date: {
              value: "30-01-2025",
            },
            estimate_value: {
              value: 2800000,
            },
          },
        ],
      },
    },
    {
      id: "pending",
      title: "Pending",
      table: {
        columnData: [
          {
            type: "header_text",
            // accessor: (_row: object, i: number) => `${i + 1}`,
            headerData: {
              prefix_icon_id: "hash_tag",
              style: { height: "32px",width: "32px" },
              sortable: false,
            },
            cellData: {
              type: "row_number",
              valueFn: (_, i) => `${i + 1}`,
            },
          },
          {
            type: "link_to_sheet",
            columns: [
              {
                type: "header_text",
                accessor: "job_request",
                headerData: {
                  text: "Job Request",
                  sortable: true,
                  prefix_icon_id: "job",
                },
                cellData: {
                  type: "text",
                },
              },
              {
                type: "header_text",
                accessor: "submitted_on",
                headerData: {
                  text: "Submitted",
                  sortable: true,
                  prefix_icon_id: "calender",
                },
                cellData: {
                  type: "date",
                },
              },
              {
                type: "header_text",
                accessor: "status",
                headerData: {
                  text: "Status",
                  sortable: true,
                  prefix_icon_id: "in_fill_down_arrow",
                },
                cellData: {
                  type: "status",
                },
              },
              {
                type: "header_text",
                accessor: "submitter",
                headerData: {
                  text: "Submitter",
                  sortable: true,
                  prefix_icon_id: "avatar",
                },
                cellData: {
                  type: "text",
                },
              },
            ],
            headerData: {
              sortable: false,
              prefix_icon_id: "link",
              text: "Q3 Financial Overview",
              allowRefresh: true,
            },
          },
          {
            type: "header_text",
            accessor: "url",
            headerData: {
              prefix_icon_id: "globe",
              text: "URL",
              sortable: true,
            },
            cellData: {
              type: "url",
            },
          },
          {
            type: "action_text",
            columns: [
              {
                type: "header_text",
                accessor: "assigned_to",
                headerData: {
                  prefix_icon_id: "emoji_hi_five",
                  style: { backgroundColor: "#E8F0E9" },
                  sortable: false,
                  text: "Assigned",
                },
                cellData: {
                  type: "text",
                },
              },
            ],
            headerData: {
              prefix_icon_id: "downward_forked_arrow_gray",
              sortable: false,
              text: "ABC",
              style: { backgroundColor: "#D2E0D4" },
              enableMoreOptions: true,
            },
          },
          {
            type: "action_text",
            columns: [
              {
                type: "header_text",
                accessor: "priority",
                headerData: {
                  sortable: false,
                  text: "Priority",
                  style: { backgroundColor: "#EAE3FC" },
                },
                cellData: {
                  type: "priority",
                },
              },
              {
                type: "header_text",
                accessor: "due_date",
                headerData: {
                  sortable: false,
                  text: "Due Date",
                  style: { backgroundColor: "#EAE3FC" },
                },
                cellData: {
                  type: "date",
                },
              },
            ],
            headerData: {
              prefix_icon_id: "downward_forked_arrow_white",
              sortable: false,
              text: "Answer a question",
              style: { backgroundColor: "#DCCFFC" },
              enableMoreOptions: true,
            },
          },
          {
            type: "action_text",
            columns: [
              {
                type: "header_text",
                accessor: "estimate_value",
                headerData: {
                  sortable: false,
                  text: "Est. Value",
                  style: { backgroundColor: "#FFE9E0" },
                },
                cellData: {
                  type: "currency",
                },
              },
            ],
            headerData: {
              prefix_icon_id: "downward_forked_arrow_white",
              sortable: false,
              text: "Extract",
              style: { backgroundColor: "#FAC2AF" },
              enableMoreOptions: true,
            },
          },
        ],
        data: [
          {
            job_request: {
              value: "Launch social media campaign for product XYZ",
            },
            submitted_on: {
              value: "15-11-2024",
            },
            status: {
              value: "in_progress",
            },
            submitter: {
              value: "Aisha Patel",
            },
            url: {
              value: "www.aishapatel.com",
            },
            assigned_to: {
              value: "Sophie Choudhury",
            },
            priority: {
              value: "medium",
            },
            due_date: {
              value: "20-11-2024",
            },
            estimate_value: {
              value: 6200000,
            },
          },
          {
            job_request: {
              value: "Update press kit for company redesign",
            },
            submitted_on: {
              value: "28-10-2024",
            },
            status: {
              value: "need_to_start",
            },
            submitter: {
              value: "Irfan Khan",
            },
            url: {
              value: "www.irfankhanportfolio.com",
            },
            assigned_to: {
              value: "Tejas Pandey",
            },
            priority: {
              value: "high",
            },
            due_date: {
              value: "30-10-2024",
            },
            estimate_value: {
              value: 3500000,
            },
          },
          {
            job_request: {
              value: "Finalize user testing feedback for app update",
            },
            submitted_on: {
              value: "05-12-2024",
            },
            status: {
              value: "in_progress",
            },
            submitter: {
              value: "Mark Johnson",
            },
            url: {
              value: "www.markjohnsondesigns.com",
            },
            assigned_to: {
              value: "Rachel Lee",
            },
            priority: {
              value: "medium",
            },
            due_date: {
              value: "10-12-2024",
            },
            estimate_value: {
              value: 4750000,
            },
          },
        ],
      },
    },
    {
      id: "reviewed",
      title: "Reviewed",
      table: {
        columnData: [
          {
            type: "header_text",
            // accessor: (_row: object, i: number) => `${i + 1}`,
            headerData: {
              prefix_icon_id: "hash_tag",
              style: { height: "32px",width: "32px" },
              sortable: false,
            },
            cellData: {
              type: "row_number",
              valueFn: (_, i) => `${i + 1}`,
            },
          },
          {
            type: "link_to_sheet",
            columns: [
              {
                type: "header_text",
                accessor: "job_request",
                headerData: {
                  text: "Job Request",
                  sortable: true,
                  prefix_icon_id: "job",
                },
                cellData: {
                  type: "text",
                },
              },
              {
                type: "header_text",
                accessor: "submitted_on",
                headerData: {
                  text: "Submitted",
                  sortable: true,
                  prefix_icon_id: "calender",
                },
                cellData: {
                  type: "date",
                },
              },
              {
                type: "header_text",
                accessor: "status",
                headerData: {
                  text: "Status",
                  sortable: true,
                  prefix_icon_id: "in_fill_down_arrow",
                },
                cellData: {
                  type: "status",
                },
              },
              {
                type: "header_text",
                accessor: "submitter",
                headerData: {
                  text: "Submitter",
                  sortable: true,
                  prefix_icon_id: "avatar",
                },
                cellData: {
                  type: "text",
                },
              },
            ],
            headerData: {
              sortable: false,
              prefix_icon_id: "link",
              text: "Q3 Financial Overview",
              allowRefresh: true,
            },
          },
          {
            type: "header_text",
            accessor: "url",
            headerData: {
              prefix_icon_id: "globe",
              text: "URL",
              sortable: true,
            },
            cellData: {
              type: "url",
            },
          },
          {
            type: "action_text",
            columns: [
              {
                type: "header_text",
                accessor: "assigned_to",
                headerData: {
                  prefix_icon_id: "emoji_hi_five",
                  style: { backgroundColor: "#E8F0E9" },
                  sortable: false,
                  text: "Assigned",
                },
                cellData: {
                  type: "text",
                },
              },
            ],
            headerData: {
              prefix_icon_id: "downward_forked_arrow_gray",
              sortable: false,
              text: "ABC",
              style: { backgroundColor: "#D2E0D4" },
              enableMoreOptions: true,
            },
          },
          {
            type: "action_text",
            columns: [
              {
                type: "header_text",
                accessor: "priority",
                headerData: {
                  sortable: false,
                  text: "Priority",
                  style: { backgroundColor: "#EAE3FC" },
                },
                cellData: {
                  type: "priority",
                },
              },
              {
                type: "header_text",
                accessor: "due_date",
                headerData: {
                  sortable: false,
                  text: "Due Date",
                  style: { backgroundColor: "#EAE3FC" },
                },
                cellData: {
                  type: "date",
                },
              },
            ],
            headerData: {
              prefix_icon_id: "downward_forked_arrow_white",
              sortable: false,
              text: "Answer a question",
              style: { backgroundColor: "#DCCFFC" },
              enableMoreOptions: true,
            },
          },
          {
            type: "action_text",
            columns: [
              {
                type: "header_text",
                accessor: "estimate_value",
                headerData: {
                  sortable: false,
                  text: "Est. Value",
                  style: { backgroundColor: "#FFE9E0" },
                },
                cellData: {
                  type: "currency",
                },
              },
            ],
            headerData: {
              prefix_icon_id: "downward_forked_arrow_white",
              sortable: false,
              text: "Extract",
              style: { backgroundColor: "#FAC2AF" },
              enableMoreOptions: true,
            },
          },
        ],
        data: [
          {
            job_request: {
              value: "Launch social media campaign for product XYZ",
            },
            submitted_on: {
              value: "15-11-2024",
            },
            status: {
              value: "in_progress",
            },
            submitter: {
              value: "Aisha Patel",
            },
            url: {
              value: "www.aishapatel.com",
            },
            assigned_to: {
              value: "Sophie Choudhury",
            },
            priority: {
              value: "medium",
            },
            due_date: {
              value: "20-11-2024",
            },
            estimate_value: {
              value: 6200000,
            },
          },
          {
            job_request: {
              value: "Finalize user testing feedback for app update",
            },
            submitted_on: {
              value: "05-12-2024",
            },
            status: {
              value: "in_progress",
            },
            submitter: {
              value: "Mark Johnson",
            },
            url: {
              value: "www.markjohnsondesigns.com",
            },
            assigned_to: {
              value: "Rachel Lee",
            },
            priority: {
              value: "medium",
            },
            due_date: {
              value: "10-12-2024",
            },
            estimate_value: {
              value: 4750000,
            },
          },
        ],
      },
    },
    {
      id: "arrived",
      title: "Arrived",
      table: {
        columnData: [
          {
            type: "header_text",
            // accessor: (_row: object, i: number) => `${i + 1}`,
            headerData: {
              prefix_icon_id: "hash_tag",
              style: { height: "32px",width: "32px" },
              sortable: false,
            },
            cellData: {
              type: "row_number",
              valueFn: (_, i) => `${i + 1}`,
            },
          },
          {
            type: "link_to_sheet",
            columns: [
              {
                type: "header_text",
                accessor: "job_request",
                headerData: {
                  text: "Job Request",
                  sortable: true,
                  prefix_icon_id: "job",
                },
                cellData: {
                  type: "text",
                },
              },
              {
                type: "header_text",
                accessor: "submitted_on",
                headerData: {
                  text: "Submitted",
                  sortable: true,
                  prefix_icon_id: "calender",
                },
                cellData: {
                  type: "date",
                },
              },
              {
                type: "header_text",
                accessor: "status",
                headerData: {
                  text: "Status",
                  sortable: true,
                  prefix_icon_id: "in_fill_down_arrow",
                },
                cellData: {
                  type: "status",
                },
              },
              {
                type: "header_text",
                accessor: "submitter",
                headerData: {
                  text: "Submitter",
                  sortable: true,
                  prefix_icon_id: "avatar",
                },
                cellData: {
                  type: "text",
                },
              },
            ],
            headerData: {
              sortable: false,
              prefix_icon_id: "link",
              text: "Q3 Financial Overview",
              allowRefresh: true,
            },
          },
          {
            type: "header_text",
            accessor: "url",
            headerData: {
              prefix_icon_id: "globe",
              text: "URL",
              sortable: true,
            },
            cellData: {
              type: "url",
            },
          },
          {
            type: "action_text",
            columns: [
              {
                type: "header_text",
                accessor: "assigned_to",
                headerData: {
                  prefix_icon_id: "emoji_hi_five",
                  style: { backgroundColor: "#E8F0E9" },
                  sortable: false,
                  text: "Assigned",
                },
                cellData: {
                  type: "text",
                },
              },
            ],
            headerData: {
              prefix_icon_id: "downward_forked_arrow_gray",
              sortable: false,
              text: "ABC",
              style: { backgroundColor: "#D2E0D4" },
              enableMoreOptions: true,
            },
          },
          {
            type: "action_text",
            columns: [
              {
                type: "header_text",
                accessor: "priority",
                headerData: {
                  sortable: false,
                  text: "Priority",
                  style: { backgroundColor: "#EAE3FC" },
                },
                cellData: {
                  type: "priority",
                },
              },
              {
                type: "header_text",
                accessor: "due_date",
                headerData: {
                  sortable: false,
                  text: "Due Date",
                  style: { backgroundColor: "#EAE3FC" },
                },
                cellData: {
                  type: "date",
                },
              },
            ],
            headerData: {
              prefix_icon_id: "downward_forked_arrow_white",
              sortable: false,
              text: "Answer a question",
              style: { backgroundColor: "#DCCFFC" },
              enableMoreOptions: true,
            },
          },
          {
            type: "action_text",
            columns: [
              {
                type: "header_text",
                accessor: "estimate_value",
                headerData: {
                  sortable: false,
                  text: "Est. Value",
                  style: { backgroundColor: "#FFE9E0" },
                },
                cellData: {
                  type: "currency",
                },
              },
            ],
            headerData: {
              prefix_icon_id: "downward_forked_arrow_white",
              sortable: false,
              text: "Extract",
              style: { backgroundColor: "#FAC2AF" },
              enableMoreOptions: true,
            },
          },
        ],
        data: [
          {
            job_request: {
              value: "Design new features for the website",
            },
            submitted_on: {
              value: "10-01-2025",
            },
            status: {
              value: "complete",
            },
            submitter: {
              value: "Emily Green",
            },
            url: {
              value: "www.emilygreenart.com",
            },
            assigned_to: {
              value: "Tom Wright",
            },
            priority: {
              value: "low",
            },
            due_date: {
              value: "15-01-2025",
            },
            estimate_value: {
              value: 5900000,
            },
          },
        ],
      },
    },
  ],
};
