export const MOCK_CLIENTS = [
    {
        id: 'mock-1',
        clientName: 'Aditya Sharma',
        contactNumber: '9876543210',
        primaryContact: '9876543210',
        email: 'aditya.sharma@example.in',
        whatsappNumber: '9876543210',
        address: 'Sector 15, Gurgaon, Haryana',
        status: 'Active',
        activeServices: ['GST Compliance (Monthly / Quarterly)', 'Income Tax Return (ITR Filing)'],
        services: ['GST Compliance (Monthly / Quarterly)', 'Income Tax Return (ITR Filing)'],
        onboardedDate: '10/01/2026',
        reminderDate: '2026-01-20',
        deadline: '22/01/2026',
        reminderFrequency: 'Monthly',
        selectedDocuments: {
            'GST Compliance (Monthly / Quarterly)': ['Sales Register', 'Purchase Register', 'GSTR-2A / 2B Data'],
            'Income Tax Return (ITR Filing)': ['PAN Card', 'Aadhaar Card', 'Form 16']
        }
    },
    {
        id: 'mock-2',
        clientName: 'Priya Patel',
        contactNumber: '9823456789',
        primaryContact: '9823456789',
        email: 'priya.patel@business.com',
        whatsappNumber: '9823456789',
        address: 'Satellite Road, Ahmedabad, Gujarat',
        status: 'Active',
        activeServices: ['TDS Compliance', 'Payroll Management'],
        services: ['TDS Compliance', 'Payroll Management'],
        onboardedDate: '08/01/2026',
        reminderDate: '2026-01-18',
        deadline: '20/01/2026',
        reminderFrequency: 'Monthly',
        selectedDocuments: {
            'TDS Compliance': ['Salary Details', 'TDS Challans'],
            'Payroll Management': ['Employee List', 'Salary Slips']
        }
    },
    {
        id: 'mock-3',
        clientName: 'Rahul Verma',
        contactNumber: '9890123456',
        primaryContact: '9890123456',
        email: 'rahul.verma@techsolutions.in',
        whatsappNumber: '9890123456',
        address: 'Koramangala, Bengaluru, Karnataka',
        status: 'Active',
        activeServices: ['GST Registration', 'Audit (Statutory / Tax Audit)'],
        services: ['GST Registration', 'Audit (Statutory / Tax Audit)'],
        onboardedDate: '12/01/2026',
        reminderDate: '2026-01-25',
        deadline: '27/01/2026',
        reminderFrequency: 'Weekly',
        selectedDocuments: {
            'GST Registration': ['PAN Card', 'Aadhaar Card', 'Rent Agreement'],
            'Audit (Statutory / Tax Audit)': ['Trial Balance', 'Ledger Extracts']
        }
    },
    {
        id: 'mock-4',
        clientName: 'Meera Iyer',
        contactNumber: '9765432109',
        primaryContact: '9765432109',
        email: 'meera.iyer@consultancy.com',
        whatsappNumber: '9765432109',
        address: 'Anna Nagar, Chennai, Tamil Nadu',
        status: 'Active',
        activeServices: ['Income Tax Return (ITR Filing)', 'Certification Services'],
        services: ['Income Tax Return (ITR Filing)', 'Certification Services'],
        onboardedDate: '11/01/2026',
        reminderDate: '2026-01-15',
        deadline: '17/01/2026',
        reminderFrequency: 'Quarterly',
        selectedDocuments: {
            'Income Tax Return (ITR Filing)': ['PAN Card', 'Aadhaar Card', 'Salary Slips'],
            'Certification Services': ['Bank Statements', 'Net Worth Proof']
        }
    },
    {
        id: 'mock-5',
        clientName: 'Vikram Singh',
        contactNumber: '9988776655',
        primaryContact: '9988776655',
        email: 'vikram.singh@logistics.in',
        whatsappNumber: '9988776655',
        address: 'Civil Lines, Jaipur, Rajasthan',
        status: 'Active',
        activeServices: ['GST Compliance (Monthly / Quarterly)', 'Custom / Other Service'],
        services: ['GST Compliance (Monthly / Quarterly)', 'Custom / Other Service'],
        onboardedDate: '05/01/2026',
        reminderDate: '2026-01-22',
        deadline: '24/01/2026',
        reminderFrequency: 'Monthly',
        selectedDocuments: {
            'GST Compliance (Monthly / Quarterly)': ['Sales Register', 'Purchase Register'],
            'Custom / Other Service': ['Custom Document 1']
        }
    },
    {
        id: 'mock-6',
        clientName: 'Ananya Mukherjee',
        contactNumber: '9543210987',
        primaryContact: '9543210987',
        email: 'ananya.m@creative.in',
        whatsappNumber: '9543210987',
        address: 'Salt Lake City, Kolkata, West Bengal',
        status: 'Active',
        activeServices: ['Bookkeeping / Accounting', 'TDS Compliance'],
        services: ['Bookkeeping / Accounting', 'TDS Compliance'],
        onboardedDate: '07/01/2026',
        reminderDate: '2026-01-28',
        deadline: '30/01/2026',
        reminderFrequency: 'Monthly',
        selectedDocuments: {
            'Bookkeeping / Accounting': ['Bank Statements', 'Sales Invoices'],
            'TDS Compliance': ['Deduction Statements', 'PAN of Deductees']
        }
    },
    {
        id: 'mock-7',
        clientName: 'Sanjay Gupta',
        contactNumber: '9123456780',
        primaryContact: '9123456780',
        email: 'sanjay.gupta@retail.com',
        whatsappNumber: '9123456780',
        address: 'Chandni Chowk, Delhi',
        status: 'Active',
        activeServices: ['GST Registration', 'Trade License'],
        services: ['GST Registration', 'Trade License'],
        onboardedDate: '09/01/2026',
        reminderDate: '2026-01-19',
        deadline: '21/01/2026',
        reminderFrequency: 'Monthly',
        selectedDocuments: {
            'GST Registration': ['Passport Size Photograph', 'Property Tax Receipt'],
            'Trade License': ['Application Form', 'ID Proof']
        }
    },
    {
        id: 'mock-8',
        clientName: 'Kavita Reddy',
        contactNumber: '9345678901',
        primaryContact: '9345678901',
        email: 'kavita.reddy@healthcare.in',
        whatsappNumber: '9345678901',
        address: 'Banjara Hills, Hyderabad, Telangana',
        status: 'Active',
        activeServices: ['Audit (Statutory / Tax Audit)', 'Bank / Loan / Financial Services'],
        services: ['Audit (Statutory / Tax Audit)', 'Bank / Loan / Financial Services'],
        onboardedDate: '06/01/2026',
        reminderDate: '2026-01-30',
        deadline: '01/02/2026',
        reminderFrequency: 'Monthly',
        selectedDocuments: {
            'Audit (Statutory / Tax Audit)': ['Bank Confirmations', 'Ledger Extracts'],
            'Bank / Loan / Financial Services': ['Balance Sheet', 'P&L Statement']
        }
    },
    {
        id: 'mock-9',
        clientName: 'Arjun Deshmukh',
        contactNumber: '9234567892',
        primaryContact: '9234567892',
        email: 'arjun.d@manufacturing.com',
        whatsappNumber: '9234567892',
        address: 'Pimpri-Chinchwad, Pune, Maharashtra',
        status: 'Active',
        activeServices: ['GST Compliance (Monthly / Quarterly)', 'Custom / Other Service'],
        services: ['GST Compliance (Monthly / Quarterly)', 'Custom / Other Service'],
        onboardedDate: '04/01/2026',
        reminderDate: '2026-01-24',
        deadline: '26/01/2026',
        reminderFrequency: 'Monthly',
        selectedDocuments: {
            'GST Compliance (Monthly / Quarterly)': ['GSTR-2A / 2B Data', 'Expense Invoices'],
            'Custom / Other Service': ['Custom Document 1']
        }
    },
    {
        id: 'mock-10',
        clientName: 'Deepa Nair',
        contactNumber: '9012345671',
        primaryContact: '9012345671',
        email: 'deepa.nair@export.in',
        whatsappNumber: '9012345671',
        address: 'Marine Drive, Kochi, Kerala',
        status: 'Active',
        activeServices: ['GST Compliance (Monthly / Quarterly)', 'Income Tax Return (ITR Filing)'],
        services: ['GST Compliance (Monthly / Quarterly)', 'Income Tax Return (ITR Filing)'],
        onboardedDate: '03/01/2026',
        reminderDate: '2026-01-21',
        deadline: '23/01/2026',
        reminderFrequency: 'Weekly',
        selectedDocuments: {
            'GST Compliance (Monthly / Quarterly)': ['Sales Register', 'Bank Statement (GST Account)'],
            'Income Tax Return (ITR Filing)': ['Salary Slips', 'Insurance Premium Receipts']
        }
    },
    // Dormant Clients
    {
        id: 'mock-11',
        clientName: 'Suresh Kumar',
        contactNumber: '9812345678',
        primaryContact: '9812345678',
        email: 'suresh.k@dormant.in',
        whatsappNumber: '9812345678',
        address: 'Lucknow, Uttar Pradesh',
        status: 'Inactive',
        activeServices: ['GST Compliance (Monthly / Quarterly)'],
        services: ['GST Compliance (Monthly / Quarterly)'],
        onboardedDate: '01/01/2026',
        reminderDate: '',
        deadline: '',
        reminderFrequency: '',
        selectedDocuments: {
            'GST Compliance (Monthly / Quarterly)': ['PAN Card', 'Old Returns']
        }
    },
    {
        id: 'mock-12',
        clientName: 'Sunita Bose',
        contactNumber: '9712345678',
        primaryContact: '9712345678',
        email: 'sunita.bose@hold.com',
        whatsappNumber: '9712345678',
        address: 'Patna, Bihar',
        status: 'Inactive',
        activeServices: ['Income Tax Return (ITR Filing)'],
        services: ['Income Tax Return (ITR Filing)'],
        onboardedDate: '02/01/2026',
        reminderDate: '',
        deadline: '',
        reminderFrequency: '',
        selectedDocuments: {
            'Income Tax Return (ITR Filing)': ['Form 16']
        }
    },
    {
        id: 'mock-13',
        clientName: 'Rohan Joshi',
        contactNumber: '9612345678',
        primaryContact: '9612345678',
        email: 'rohan.joshi@dormant.in',
        whatsappNumber: '9612345678',
        address: 'Indore, Madhya Pradesh',
        status: 'Inactive',
        activeServices: ['TDS Compliance'],
        services: ['TDS Compliance'],
        onboardedDate: '01/12/2025',
        reminderDate: '',
        deadline: '',
        reminderFrequency: '',
        selectedDocuments: {
            'TDS Compliance': ['Vendor Details']
        }
    },
    {
        id: 'mock-14',
        clientName: 'Divya Malhotra',
        contactNumber: '9512345678',
        primaryContact: '9512345678',
        email: 'divya.m@hold.com',
        whatsappNumber: '9512345678',
        address: 'Chandigarh, Punjab',
        status: 'Inactive',
        activeServices: ['GST Compliance (Monthly / Quarterly)'],
        services: ['GST Compliance (Monthly / Quarterly)'],
        onboardedDate: '15/12/2025',
        reminderDate: '',
        deadline: '',
        reminderFrequency: '',
        selectedDocuments: {
            'GST Compliance (Monthly / Quarterly)': ['Registration Certificate']
        }
    },
    {
        id: 'mock-15',
        clientName: 'Amitabh Jha',
        contactNumber: '9412345678',
        primaryContact: '9412345678',
        email: 'amitabh.jha@dormant.in',
        whatsappNumber: '9412345678',
        address: 'Ranchi, Jharkhand',
        status: 'Inactive',
        activeServices: ['Trust / NGO Compliance'],
        services: ['Trust / NGO Compliance'],
        onboardedDate: '20/12/2025',
        reminderDate: '',
        deadline: '',
        reminderFrequency: '',
        selectedDocuments: {
            'Trust / NGO Compliance': ['Employee KYC']
        }
    }
];
