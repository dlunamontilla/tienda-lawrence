var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/dlunamontilla/tienda-lawrence.git', // Update to point to your repository  
        user: {
            name: 'David E Luna M', // update to use your name
            email: 'davidlunamontilla@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)