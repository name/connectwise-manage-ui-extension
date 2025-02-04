const CONNECTWISE_MODS = {
  // Visual Theme
  theme: {
    enabled: false,
    description: "Theme Settings",
    variables: {
      '--background-primary': '#000000',
      '--text-primary': '#ffffff',
      '--accent-color': '#1DA1F2',
      '--background-secondary': '#2F3336'
    }
  },

  // UI Element Replacements
  replaceElements: {
    customLogo: {
      description: "Remove Custom Branding",
      enabled: false,
      type: 'logoReplace',
      target: 'img[src*="TopNavLogo"]',
      replacementData: {
        svg: chrome.runtime.getURL('icon.png'),
        width: '32px',
        height: '32px',
        styles: `
          img[src*="TopNavLogo"] {
            content: url('${chrome.runtime.getURL('icon.png')}') !important;
            width: 32px !important;
            height: 32px !important;
          }
        `
      }
    }
  },

  // Hide Elements
  hideElements: {

  },

  // Style Fixes
  styleFixes: {
    modernSidebar: {
      description: "Fix Sidebar Styling",
      enabled: false,
      selectors: [
        '.GE0S-T1CIOE.GE0S-T1CKOE',
        '.cw-lcm-section'
      ],
      styles: `
        background: var(--section-bg);
        border-right: 1px solid var(--border-color);
        transition: all 0.2s ease;
      `,
      additionalSelectors: {
        '.GE0S-T1CGOE.GE0S-T1CBEC': 'display: none !important;'
      }
    },
    topBarHidden: {
      enabled: false,
      description: "Fix Main Page Layout",
      selectors: [
        '.GE0S-T1CIOE.GE0S-T1CKOE',   // Sidebar container
        '.GE0S-T1CGEC',                // Main content area
        '.main-form-view-center'       // Center content container
      ],
      styles: `
        height: calc(100% - 0px) !important;
        min-height: 100% !important;
        padding-top: 0 !important;
      `
    },
    tableScrollbars: {
      enabled: false,
      description: "Fix Table Scrollbars",
      selectors: [
        '#srboard-listview-scroller',
        '#srboardallmembertickets-listview-scroller',
        '[id$="-listview-scroller"]'  // Matches any element ID ending with -listview-scroller
      ],
      styles: `
        height: auto !important;
        max-height: none !important;
        overflow-x: auto !important;
        overflow-y: visible !important;

        /* Modern Scrollbar Styling */
        &::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        &::-webkit-scrollbar-track {
          background: transparent;
        }
        
        &::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        
        &::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        
        /* Firefox */
        scrollbar-width: thin;
        scrollbar-color: #c1c1c1 transparent;
      `
    },
    modernTableHeaders: {
      enabled: false,
      description: "Clean Table Headers",
      selectors: [
        '.GE0S-T1CHDI',  // Header cells
        '.GE0S-T1CDDI',  // Header content container
        '.GE0S-T1CIF'    // Header inner wrapper
      ],
      styles: `
        text-align: center !important;
        color: var(--text-secondary) !important;
        border-bottom: 1px solid var(--border-color) !important;
      `,
      additionalSelectors: {
        // Remove the dog-ear background image
        '.GE0S-T1CCVF': `
          background-image: none !important;
        `
      }
    },
    modernTicketCards: {
      enabled: false,
      description: "Modern Ticket Cards",
      selectors: [
        '.pod_service_ticket_company',
        '.GE0S-T1CPEH'
      ],
      styles: `
        /* Card Container */
        background: #ffffff;
        border: 1px solid #e1e4e8;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin: 8px 0;
        transition: all 0.2s ease;

        /* Header */
        .GE0S-T1CLEH {
          background: #f6f8fa !important;
          border-bottom: 1px solid #e1e4e8;
          border-radius: 8px 8px 0 0;
          padding: 12px;

          .mm_podHeader {
            background: none;
            border: none;
          }

          .GE0S-T1CPFH {
            font-weight: 500;
          }

          .x-panel-toolbar {
            background: none;
            border: none;
          }
        }

        /* Summary Section */
        .GE0S-T1CIJI {
          padding: 12px;
          border-bottom: 1px solid #e1e4e8;
          background: #ffffff;

          .GE0S-T1CGJI {
            width: 100%;
          }

          .GE0S-T1CHJI {
            .gwt-Label {
              font-weight: 500;
              padding-right: 8px;
            }
          }

          .GE0S-T1CDJI {
            .cw_RequiredLabel {
              color: #d73a49;
              padding: 0 8px;
            }
          }

          .GE0S-T1CGCI {
            border: 1px solid #e1e4e8;
            border-radius: 4px;
            padding: 8px;
            width: 100% !important;
            transition: all 0.2s ease;

            &:focus {
              border-color: #0366d6;
              box-shadow: 0 0 0 2px rgba(3,102,214,0.1);
              outline: none;
            }
          }
        }

        /* Action Buttons Section */
        .GE0S-T1CIOI.cw_CwHorizontalPanel {
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;

          /* Age Label */
          .GE0S-T1CK0M {
            padding: 6px 12px;
            background: #f6f8fa;
            border-radius: 4px;
            border: 1px solid #e1e4e8;
            font-size: 0.9em;
          }

          /* Action Buttons */
          .GE0S-T1CLDJ {
            .mm_button {
              padding: 6px 12px;
              border: 1px solid #e1e4e8;
              border-radius: 4px;
              background: #ffffff;
              transition: all 0.2s ease;

              &:hover {
                background: #f6f8fa;
                border-color: #0366d6;
              }

              .GE0S-T1CFNG {
                font-weight: 500;
              }
            }

            /* Primary Button */
            &.GE0S-T1CHDJ .mm_button {
              background: #0366d6;
              border-color: #0366d6;
              color: #ffffff;

              &:hover {
                background: #035cc1;
              }
            }
          }
        }

        /* Labels */
        .gwt-Label {
          font-weight: 500;
        }

        /* Input Fields */
        .GE0S-T1CGCI {
          border-radius: 4px;
          padding: 8px;
          transition: all 0.2s ease;

          &:focus {
            box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
            outline: none;
          }
        }

        /* Table Layout */
        .GE0S-T1COCH {
          border-spacing: 8px;
          padding: 12px;
        }

        /* Hover Effect */
        &:hover {
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
          transform: translateY(-1px);
        }
      `
    },
    modernTicketNotes: {
      enabled: false,
      description: "Modern Ticket Notes",
      selectors: [
        '.TicketNote-noteContainer',
        '.TicketNote-rowWrap',
        '.TicketNote-row'
      ],
      styles: `
        /* Note Header */
        .TicketNote-note {
          position: relative;
          padding-right: 50px;

          .TicketNote-moreOptions,
          .TicketNote-moreOptionsMember {
            opacity: 0.6;
            transition: opacity 0.2s ease;

            &:hover {
              opacity: 1;
            }
          }
        }

        /* Note Content */
        .TicketNote-noteLabel {
          font-size: 14px;
          line-height: 1.5;
          
          p {
            margin: 0 0 16px;
          }

          pre, code {
            background: #f6f8fa;
            border-radius: 4px;
            padding: 8px;
            margin: 8px 0;
            overflow-x: auto;
            font-family: monospace;
          }
        }

        /* Avatar */
        .TicketNote-avatarWrap,
        .TicketNote-avatarWrapMember {
          .TicketNote-avatarColor {
            border-radius: 50%;
            overflow: hidden;
          }

          .TicketNote-profilePhoto {
            border-radius: 50%;
            border: 2px solid #ffffff;
          }
        }

        /* Pills */
        .TicketNote-pill {
          border-radius: 12px;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 500;
        }

        /* Links */
        a {
          color: #0366d6;
          text-decoration: none;
          transition: color 0.2s ease;

          &:hover {
            color: #035cc1;
            text-decoration: underline;
          }
        }

        /* Images */
        img {
          max-width: 100%;
          border-radius: 4px;
          margin: 8px 0;
        }

        /* Timestamps */
        .TimeText-date {
          color: #666;
          font-size: 12px;
        }

        /* Names */
        .TicketNote-basicName,
        .TicketNote-clickableName {
          font-weight: 500;
        }
      `
    },
    ticketNotesScrollbars: {
      enabled: false,
      description: "Fix Ticket Notes Scrollbars",
      selectors: [
        '.TicketNote-noteContainer',
        '.TicketNote-rowWrap',
        '.TicketNote-row',
        '.TicketNote-noteLabel'
      ],
      styles: `
        /* Modern Scrollbar Styling */
        &::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        &::-webkit-scrollbar-track {
          background: transparent;
        }
        
        &::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        
        &::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        
        /* Firefox */
        scrollbar-width: thin;
        scrollbar-color: #c1c1c1 transparent;
      `
    }
  }
};
