/* eslint-disable no-unused-vars */

/**
 * @typedef {Object} SearchParamProps
 * @property {{ [key: string]: string }} params
 * @property {{ [key: string]: string | string[] | undefined }} searchParams
 */

/**
 * @typedef {Object} SignUpParams
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} address1
 * @property {string} city
 * @property {string} state
 * @property {string} postalCode
 * @property {string} dateOfBirth
 * @property {string} ssn
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} LoginUser
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} User
 * @property {string} $id
 * @property {string} email
 * @property {string} userId
 * @property {string} dwollaCustomerUrl
 * @property {string} dwollaCustomerId
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} address1
 * @property {string} city
 * @property {string} state
 * @property {string} postalCode
 * @property {string} dateOfBirth
 * @property {string} ssn
 */

/**
 * @typedef {Object} NewUserParams
 * @property {string} userId
 * @property {string} email
 * @property {string} name
 * @property {string} password
 */

/**
 * @typedef {Object} Account
 * @property {string} id
 * @property {number} availableBalance
 * @property {number} currentBalance
 * @property {string} officialName
 * @property {string} mask
 * @property {string} institutionId
 * @property {string} name
 * @property {string} type
 * @property {string} subtype
 * @property {string} appwriteItemId
 * @property {string} sharableId
 */

/**
 * @typedef {Object} Transaction
 * @property {string} id
 * @property {string} $id
 * @property {string} name
 * @property {string} paymentChannel
 * @property {string} type
 * @property {string} accountId
 * @property {number} amount
 * @property {boolean} pending
 * @property {string} category
 * @property {string} date
 * @property {string} image
 * @property {string} $createdAt
 * @property {string} channel
 * @property {string} senderBankId
 * @property {string} receiverBankId
 */

/**
 * @typedef {Object} Bank
 * @property {string} $id
 * @property {string} accountId
 * @property {string} bankId
 * @property {string} accessToken
 * @property {string} fundingSourceUrl
 * @property {string} userId
 * @property {string} sharableId
 */

/**
 * @typedef {"depository" | "credit" | "loan " | "investment" | "other"} AccountTypes
 */

/**
 * @typedef {"Food and Drink" | "Travel" | "Transfer"} Category
 */

/**
 * @typedef {Object} CategoryCount
 * @property {string} name
 * @property {number} count
 * @property {number} totalCount
 */

/**
 * @typedef {Object} Receiver
 * @property {string} firstName
 * @property {string} lastName
 */

/**
 * @typedef {Object} TransferParams
 * @property {string} sourceFundingSourceUrl
 * @property {string} destinationFundingSourceUrl
 * @property {string} amount
 */

/**
 * @typedef {Object} AddFundingSourceParams
 * @property {string} dwollaCustomerId
 * @property {string} processorToken
 * @property {string} bankName
 */

/**
 * @typedef {Object} NewDwollaCustomerParams
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} type
 * @property {string} address1
 * @property {string} city
 * @property {string} state
 * @property {string} postalCode
 * @property {string} dateOfBirth
 * @property {string} ssn
 */

/**
 * @typedef {Object} CreditCardProps
 * @property {Account} account
 * @property {string} userName
 * @property {boolean} [showBalance]
 */

/**
 * @typedef {Object} BankInfoProps
 * @property {Account} account
 * @property {string} [appwriteItemId]
 * @property {"full" | "card"} type
 */

/**
 * @typedef {Object} HeaderBoxProps
 * @property {"title" | "greeting"} [type]
 * @property {string} title
 * @property {string} subtext
 * @property {string} [user]
 */

/**
 * @typedef {Object} MobileNavProps
 * @property {User} user
 */

/**
 * @typedef {Object} PageHeaderProps
 * @property {string} topTitle
 * @property {string} bottomTitle
 * @property {string} topDescription
 * @property {string} bottomDescription
 * @property {boolean} [connectBank]
 */

/**
 * @typedef {Object} PaginationProps
 * @property {number} page
 * @property {number} totalPages
 */

/**
 * @typedef {Object} PlaidLinkProps
 * @property {User} user
 * @property {"primary" | "ghost"} [variant]
 * @property {string} [dwollaCustomerId]
 */

/**
 * @typedef {Object} AuthFormProps
 * @property {"sign-in" | "sign-up"} type
 */

/**
 * @typedef {Object} BankDropdownProps
 * @property {Account[]} accounts
 * @property {Function} [setValue]
 * @property {string} [otherStyles]
 */

/**
 * @typedef {Object} BankTabItemProps
 * @property {Account} account
 * @property {string} [appwriteItemId]
 */

/**
 * @typedef {Object} TotlaBalanceBoxProps
 * @property {Account[]} accounts
 * @property {number} totalBanks
 * @property {number} totalCurrentBalance
 */

/**
 * @typedef {Object} FooterProps
 * @property {User} user
 */

/**
 * @typedef {Object} RightSidebarProps
 * @property {User} user
 * @property {Transaction[]} transactions
 * @property {(Bank[] & Account[])} banks
 */

/**
 * @typedef {Object} SiderbarProps
 * @property {User} user
 */

/**
 * @typedef {Object} RecentTransactionsProps
 * @property {Account[]} accounts
 * @property {Transaction[]} transactions
 * @property {string} appwriteItemId
 * @property {number} page
 */

/**
 * @typedef {Object} TransactionHistoryTableProps
 * @property {Transaction[]} transactions
 * @property {number} page
 */

/**
 * @typedef {Object} CategoryBadgeProps
 * @property {string} category
 */

/**
 * @typedef {Object} TransactionTableProps
 * @property {Transaction[]} transactions
 */

/**
 * @typedef {Object} CategoryProps
 * @property {CategoryCount} category
 */

/**
 * @typedef {Object} DoughnutChartProps
 * @property {Account[]} accounts
 */

/**
 * @typedef {Object} PaymentTransferFormProps
 * @property {Account[]} accounts
 */

/**
 * @typedef {Object} getAccountsProps
 * @property {string} userId
 */

/**
 * @typedef {Object} getAccountProps
 * @property {string} appwriteItemId
 */

/**
 * @typedef {Object} getInstitutionProps
 * @property {string} institutionId
 */

/**
 * @typedef {Object} getTransactionsProps
 * @property {string} accessToken
 */

/**
 * @typedef {Object} CreateFundingSourceOptions
 * @property {string} customerId
 * @property {string} fundingSourceName
 * @property {string} plaidToken
 * @property {Object} _links
 */

/**
 * @typedef {Object} CreateTransactionProps
 * @property {string} name
 * @property {string} amount
 * @property {string} senderId
 * @property {string} senderBankId
 * @property {string} receiverId
 * @property {string} receiverBankId
 * @property {string} email
 */

/**
 * @typedef {Object} getTransactionsByBankIdProps
 * @property {string} bankId
 */

/**
 * @typedef {Object} signInProps
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} getUserInfoProps
 * @property {string} userId
 */

/**
 * @typedef {Object} exchangePublicTokenProps
 * @property {string} publicToken
 * @property {User} user
 */

/**
 * @typedef {Object} createBankAccountProps
 * @property {string} accessToken
 * @property {string} userId
 * @property {string} accountId
 * @property {string} bankId
 * @property {string} fundingSourceUrl
 * @property {string} sharableId
 */

/**
 * @typedef {Object} getBanksProps
 * @property {string} userId
 */

/**
 * @typedef {Object} getBankProps
 * @property {string} documentId
 */

/**
 * @typedef {Object} getBankByAccountIdProps
 * @property {string} accountId
 */
