import { formStates } from 'employees/actions';

export const defaultMock = {
  employeesGroups: [
    {
      name: 'Admin',
      employees: [
        {
          id: 1,
          firstName: 'Jack',
          familyName: 'Jackson',
          roleId: 1,
          teamId: 2,
          imageId: 1,
          email: 'jjackson@affinityid.co.nz',
          city: 'Auckland',
          address: '21 college hill',
          createdAt: 1567150697936,
          updatedAt: 1567150697936,
          iconSrc:
            'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/J_Jackson.jpg',
          role: 'Admin',
          team: 'Creative'
        },
        {
          id: 2,
          firstName: 'Victoria',
          familyName: 'Ferguson',
          roleId: 1,
          teamId: 3,
          imageId: 2,
          email: 'vferguson@affinityid.co.nz',
          city: 'Auckland',
          address: '29 college hill',
          createdAt: 1567150690936,
          updatedAt: 1567150690936,
          iconSrc:
            'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/V_Ferguson.jpg',
          role: 'Admin',
          team: 'Management'
        }
      ]
    },
    {
      name: 'Employees',
      employees: [
        {
          id: 3,
          firstName: 'Donna',
          familyName: 'Hicks',
          roleId: 2,
          teamId: 1,
          imageId: 3,
          email: 'donnah@affinityid.co.nz',
          city: 'Auckland',
          address: '25 college hill',
          createdAt: 1567150697936,
          updatedAt: 1567150697936,
          iconSrc:
            'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/D_Hicks.jpg',
          role: 'Employee',
          team: 'Finance & Admin'
        },
        {
          id: 4,
          firstName: 'Mary',
          familyName: 'Long',
          roleId: 2,
          teamId: 1,
          imageId: 4,
          email: 'mlong@affinityid.co.nz',
          city: 'Auckland',
          address: '20 college hill',
          createdAt: 1567150697936,
          updatedAt: 1567150697936,
          iconSrc:
            'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/M_Long.jpg',
          role: 'Employee',
          team: 'Finance & Admin'
        },
        {
          id: 5,
          firstName: 'Andy',
          familyName: 'Mann',
          roleId: 2,
          teamId: 1,
          imageId: 5,
          email: 'amann@affinityid.co.nz',
          city: 'Auckland',
          address: '19 college hill',
          createdAt: 1567150697936,
          updatedAt: 1567150697936,
          iconSrc:
            'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/A_Mann.jpg',
          role: 'Employee',
          team: 'Finance & Admin'
        }
      ]
    }
  ],
  employees: [
    {
      id: 1,
      firstName: 'Jack',
      familyName: 'Jackson',
      roleId: 1,
      teamId: 2,
      imageId: 1,
      email: 'jjackson@affinityid.co.nz',
      city: 'Auckland',
      address: '21 college hill',
      createdAt: 1567150697936,
      updatedAt: 1567150697936,
      iconSrc:
        'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/J_Jackson.jpg',
      role: 'Admin',
      team: 'Creative'
    },
    {
      id: 2,
      firstName: 'Victoria',
      familyName: 'Ferguson',
      roleId: 1,
      teamId: 3,
      imageId: 2,
      email: 'vferguson@affinityid.co.nz',
      city: 'Auckland',
      address: '29 college hill',
      createdAt: 1567150690936,
      updatedAt: 1567150690936,
      iconSrc:
        'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/V_Ferguson.jpg',
      role: 'Admin',
      team: 'Management'
    },
    {
      id: 3,
      firstName: 'Donna',
      familyName: 'Hicks',
      roleId: 2,
      teamId: 1,
      imageId: 3,
      email: 'donnah@affinityid.co.nz',
      city: 'Auckland',
      address: '25 college hill',
      createdAt: 1567150697936,
      updatedAt: 1567150697936,
      iconSrc:
        'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/D_Hicks.jpg',
      role: 'Employee',
      team: 'Finance & Admin'
    },
    {
      id: 4,
      firstName: 'Mary',
      familyName: 'Long',
      roleId: 2,
      teamId: 1,
      imageId: 4,
      email: 'mlong@affinityid.co.nz',
      city: 'Auckland',
      address: '20 college hill',
      createdAt: 1567150697936,
      updatedAt: 1567150697936,
      iconSrc:
        'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/M_Long.jpg',
      role: 'Employee',
      team: 'Finance & Admin'
    },
    {
      id: 5,
      firstName: 'Andy',
      familyName: 'Mann',
      roleId: 2,
      teamId: 1,
      imageId: 5,
      email: 'amann@affinityid.co.nz',
      city: 'Auckland',
      address: '19 college hill',
      createdAt: 1567150697936,
      updatedAt: 1567150697936,
      iconSrc:
        'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/A_Mann.jpg',
      role: 'Employee',
      team: 'Finance & Admin'
    }
  ],
  selectedEmployee: {
    id: 1,
    firstName: 'Jack',
    familyName: 'Jackson',
    roleId: 1,
    teamId: 2,
    imageId: 1,
    email: 'jjackson@affinityid.co.nz',
    city: 'Auckland',
    address: '21 college hill',
    createdAt: 1567150697936,
    updatedAt: 1567150697936,
    iconSrc:
      'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/J_Jackson.jpg',
    role: 'Admin',
    team: 'Creative'
  },
  selectedEmployeeState: 'DEFAULT_STATE',
  teams: [
    { id: 1, name: 'Finance & Admin' },
    { id: 2, name: 'Creative' },
    { id: 3, name: 'Management' }
  ],
  images: [
    {
      id: 1,
      name: 'J_Jackson.jpg',
      url:
        'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/J_Jackson.jpg'
    },
    {
      id: 2,
      name: 'V_Ferguson.jpg',
      url:
        'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/V_Ferguson.jpg'
    },
    {
      id: 3,
      name: 'D_Hicks.jpg',
      url:
        'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/D_Hicks.jpg'
    },
    {
      id: 4,
      name: 'M_Long.jpg',
      url:
        'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/M_Long.jpg'
    },
    {
      id: 5,
      name: 'A_Mann.jpg',
      url:
        'https://github.com/oleksiizapara/AffinityIdTechnicalTestApi/raw/master/A_Mann.jpg'
    }
  ],
  roles: [{ id: 1, name: 'Admin' }, { id: 2, name: 'Employee' }],
  sortDirection: 'NEWEST',
  formState: 'ERROR_STATE'
};
