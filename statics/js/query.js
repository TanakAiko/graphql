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
      
    ]
  }
  order_by: {createdAt:asc}) {
    nodes {
      amount
      object {
        name
        type
      }
    }
    aggregate {
      sum {
        amount
      }
    }
  }
}
  `;
