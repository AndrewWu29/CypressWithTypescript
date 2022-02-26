import { htmlPrefilter } from "cypress/types/jquery"
import { BlogPostsPage } from "./blog_pages/blog_posts"

const postsPage = new BlogPostsPage()

describe('PostsPage Suite', () => {
    beforeEach(function () {
        cy.fixture('blogpostspage.json').as('blogpostspage')
    })
    it('Use Home button to Homepage test in en', function (){
        postsPage.navigate('/posts')
        postsPage.verifyButtonContain(this.blogpostspage.homeButton, this.blogpostspage.baseUrl)
        postsPage.clickButton(this.blogpostspage.homeButton)
        postsPage.verifyUrl(this.blogpostspage.baseUrl)
    })
    it('At a post use Home button to Homepage test in en', function (){
        postsPage.navigate('/posts')
        postsPage.clickButton(this.blogpostspage.firstPost)
        postsPage.verifyButtonContain(this.blogpostspage.homeButtonInPost, this.blogpostspage.baseUrl)
        postsPage.clickButton(this.blogpostspage.homeButtonInPost)
        postsPage.verifyUrl(this.blogpostspage.baseUrl)
    })
    it('Use Logo button to Homepage test in en', function (){
        postsPage.navigate('/posts')
        postsPage.verifyButtonContain(this.blogpostspage.LogoButton, this.blogpostspage.baseUrl)
        postsPage.clickButton(this.blogpostspage.LogoButton)
        postsPage.verifyUrl(this.blogpostspage.baseUrl)
    })
    it('At a post use Logo button to Homepage test in en', function (){
        postsPage.navigate('/posts')
        postsPage.clickButton(this.blogpostspage.firstPost)
        postsPage.verifyButtonContain(this.blogpostspage.LogoButton, this.blogpostspage.baseUrl)
        postsPage.clickButton(this.blogpostspage.LogoButton)
        postsPage.verifyUrl(this.blogpostspage.baseUrl)
    })
    it('At a post use Next Page button to Next Post test in en', function (){
        postsPage.navigate('/posts')
        postsPage.clickButton(this.blogpostspage.firstPost)
        postsPage.verifyButtonContain(this.blogpostspage.nextPage, 'next', 'class')
        postsPage.clickButton(this.blogpostspage.nextPage)
        postsPage.verifyButtonContain(this.blogpostspage.prevPage, 'prev', 'class')
        postsPage.verifyButtonContain(this.blogpostspage.nextPage, 'next', 'class')
    })
    it.only('At a post use Prev Page button to Prev Post test in en', function (){
        postsPage.navigate('/posts')
        postsPage.clickButton(this.blogpostspage.firstPost)
        postsPage.verifyButtonContain(this.blogpostspage.nextPage, 'next', 'class')
        postsPage.clickButton(this.blogpostspage.nextPage)
        postsPage.verifyButtonContain(this.blogpostspage.prevPage, 'prev', 'class')
        postsPage.clickButton(this.blogpostspage.prevPage)
        postsPage.verifyNotExists(this.blogpostspage.pagiNav, 'prev')
        postsPage.verifyButtonContain(this.blogpostspage.nextPage, 'next', 'class')
    })
    it('Pressed first post and back to Posts test in en', function (){
        postsPage.navigate('/posts')
        cy.get(this.blogpostspage.firstPost).invoke('attr', 'href').then(href => {
            let getFirstPosthref = href
            postsPage.clickButton(this.blogpostspage.firstPost)
            cy.url().should('include', getFirstPosthref)
        })
        postsPage.clickButton(this.blogpostspage.backPosts)
        postsPage.verifyUrl(this.blogpostspage.baseUrl + '/posts/')
    })
    it('Testing next and prev page button in en', function (){
        postsPage.navigate('/posts')
        postsPage.clickButton(this.blogpostspage.nextPage)
        postsPage.verifyUrl(this.blogpostspage.baseUrl + '/posts/page/2/')
        postsPage.clickButton(this.blogpostspage.prevPage)
        postsPage.verifyUrl(this.blogpostspage.baseUrl + '/posts/')
    })
    it('Redirect to another Subpages testing use menu button in en', function (){
        cy.wrap(this.blogpostspage.postsPagesList_en).each((index) =>{
            postsPage.navigate('/posts')
            let pageName = 'this.blogpostspage.' + index
            postsPage.clickButton(eval(pageName))
            postsPage.verifySelectorContain('h1', index.toString())
            postsPage.verifyUrl(index.toString().toLocaleLowerCase())
        })
    })
    it('Use post translations button test in en', function (){
        postsPage.navigate('/2022/02/markdown-basic-systax/')
        postsPage.verifyButtonContain(this.blogpostspage.translationsButton, '/zh-tw/2022/02/markdown-')
        postsPage.clickButton(this.blogpostspage.translationsButton)
        postsPage.verifyUrl(this.blogpostspage.baseUrl_zhtw)
    })
    it('Use Language button test in en', function (){
        postsPage.navigate('/posts')
        postsPage.verifyButtonContain(this.blogpostspage.Language, '/zh-tw/')
        postsPage.clickButton(this.blogpostspage.Language)
        postsPage.verifyUrl(this.blogpostspage.baseUrl + '/zh-tw/')
    })
})