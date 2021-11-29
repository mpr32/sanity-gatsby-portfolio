export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a4ec749dd72019ebbe59cb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qkvtixpp',
                  apiId: 'a17b0371-807b-49b6-8dfc-1eba947f120f'
                },
                {
                  buildHookId: '61a4ec74c699bd1c993840f9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jnd39cr1',
                  apiId: '5f16d2ea-668f-4e6e-9afc-ab1148a6c35f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mpr32/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jnd39cr1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
