export const queryGetUserInfo = `
{
  user {
    id
    login
    attrs
  }
}
  `;

export const queryAuditRatio = `
  {
    audit {
      grade
      result{
        id
        grade
        attrs
        type
        path
        object {
          name
        }
      }
      auditor  {
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