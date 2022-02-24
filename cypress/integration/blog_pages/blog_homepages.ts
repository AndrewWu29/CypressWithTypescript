import cypress from "cypress"
export class BlogHomePage{

    blogURL_en = 'https://AndrewWu29.github.io/'
    blogURL_zhtw = 'https://AndrewWu29.github.io/zh-tw/'
    blogHomePage_Posts = '#menu > :nth-child(1) > a'
    blogHomePage_Archives = '#menu > :nth-child(2) > a'
    blogHomePage_Categories = '#menu > :nth-child(3) > a'
    blogHomePage_Tags = '#menu > :nth-child(4) > a'
    blogHomePage_Search = '#menu > :nth-child(5) > a'
    blogHomePage_About = '#menu > :nth-child(6) > a'
    blogHomePage_Language = '.lang-switch > :nth-child(2) > a'
    blogHomePage_ButtonPosts = '[href="posts"]'
    blogHomePage_ButtonTags = '[href="tags"]'
    blogHomePage_ButtonLinkedin = '[href="https://www.linkedin.com/in/bing-ying-wu-3b71b783"]'
    blogHomePage_ButtonGitHub = '[href="https://github.com/AndrewWu29"]'
    blogHomePage_ButtonEmail = '[href="mailto:ying.wu0129@gmail.com"]'
    blogHomePage_ButtonRSSfeed = '[href="index.xml"]'
    blogHomePage_LinkPosts = 'posts'
    blogHomePage_LinkTags = 'tags'
    blogHomePage_LinkLinkedin = 'https://www.linkedin.com/in/bing-ying-wu-3b71b783'
    blogHomePage_LinkGitHub = 'https://github.com/AndrewWu29'
    blogHomePage_LinkEmail = 'mailto:ying.wu0129@gmail.com'
    blogHomePage_LinkRSSfeed = 'index.xml'
    
    navigate(url: string){
        cy.visit(url)
    }
    clickButton(button: string){
        console.log(button)
        cy.get(button).click()
    }
    verifySelectorContain(Selector: string, value: string){
        cy.get(Selector).should('contain', value)
    }
    verifyButtonContain(button: string, value: string){
        cy.log(button)
        cy.get(button)
            .should('have.attr', 'href')
            .and('include', value)
    }
}