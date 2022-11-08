
const {v4: uuidv4} = require('uuid');


let db = {
    articles: [
        {
          id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
          title: 'Article 1',
          content: 'Content of the article.',
          date: '10/05/2022',
          author: 'Felix Luboz'
        },

        {
            id: uuidv4(),
            title: 'Article 2',
            content: 'Content of the article.',
            date: '10/05/2022',
            author: 'Felix Luboz'
          },
        
          {
            id: uuidv4(),
            title: 'Article 2',
            content: 'Content of the article.',
            date: '10/05/2022',
            author: 'Felix Luboz'
          },

          {
            id: uuidv4(),
            title: 'Article 2',
            content: 'Content of the article.',
            date: '10/05/2022',
            author: 'Felix Luboz'
          },
        
      ],
      comments: [
        {
          id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          timestamp: 1664835049,
          content: 'This is my comment about your article 1',
          articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
          author: 'Elie Mediouni'
        },

        {
            id: uuidv4(),
            timestamp: 1664835049,
            content: 'other comment on article 1',
            articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
            author: 'Elie Mediouni'
          },
        
      ]
}

module.exports = db