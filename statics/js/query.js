export const queryGetUserInfo = `
{
  user {
    id
    email
    firstName
    lastName
    login
    validAudits: audits_aggregate(where: {grade: {_gte: 1}}) {
      aggregate {
        count
      }
    }
    failedAudits: audits_aggregate(where: {grade: {_lt: 1}}) {
      aggregate {
        count
      }
    }
  }
  transaction_aggregate(where: {
    _and:[
      {event: {registrationId: {_eq: 55}}, type: {_eq: "xp"}},
      {amount: {_gte: 1000}}
    ]
  }) {
    nodes {
      amount
      object {
        name
      }
    }
  }
}
  `;

export const queryAuditRatio = `
{
  audit (where: {
    _and:[
      {auditor: {login: {_eq: "cheimbaye"}}},
      {grade: {_is_null: false}}
    ]
  }) {
    grade
    auditor {
      login
    }
  }
}
  `

  export const queryAuditFail = `
  {
    audit (where: {
      _and:[
        {auditor: {login: {_eq: "cheimbaye"}}},
        {grade: {_lt: 1}}
      ]
    }) {
      grade
      auditor {
        login
      }
    }
  }
  `

  export const queryAuditPass = `
  {
    audit (where: {
      _and:[
        {auditor: {login: {_eq: "cheimbaye"}}},
        {grade: {_gte: 1}}
      ]
    }) {
      grade
      auditor {
        login
      }
    }
  }
  `

export const queryXPbyProject = `{
    
  }`

/* `
  {
    object(where: { type: { _eq: project }}) {
      name
      type
      attrs
    }  
  }` */