import { forEach } from "cypress/types/lodash"
import {BlogHomePage} from "./blog_pages/blog_homepages"

const homePage = new BlogHomePage()
const pagesList_en = ['Posts', 'Archives', 'Categories', 'Tags', 'Search', 'About']
const pagesList_zhtw = ['文章', '歸檔', '分類', '標籤', '搜尋', '關於我']
const pageButtons = ['Posts', 'Tags', 'Linkedin', 'GitHub', 'Email', 'RSSfeed']


it('homepage test in en', function (){
    homePage.navigate(homePage.blogURL_en)
    cy.wrap(pagesList_en).each((index) =>{
        let selectorName = 'homePage.blogHomePage_' + index
        homePage.verifySelectorContain(eval(selectorName), index.toString())
    })
    homePage.verifySelectorContain(homePage.blogHomePage_Language, '中文')
    cy.wrap(pagesList_en).each((index) =>{
        let buttonName = 'homePage.blogHomePage_' + index
        let linkURL = homePage.blogURL_en + (index + '/').toLocaleLowerCase()
        cy.log(buttonName)
        cy.log(linkURL)
        homePage.verifyButtonContain(eval(buttonName), linkURL)
    })
    homePage.verifyButtonContain(homePage.blogHomePage_Language, 'https://AndrewWu29.github.io/zh-tw/')
    cy.wrap(pageButtons).each((index) =>{
        let buttonName = 'homePage.blogHomePage_Button' + index
        let link = 'homePage.blogHomePage_Link' + index
        cy.log(buttonName)
        cy.log(link)
        homePage.verifyButtonContain(eval(buttonName), eval(link))
    })
})
it('homepage test in zh-tw', function (){
    homePage.navigate(homePage.blogURL_zhtw)
    let indexCount = 0
    cy.wrap(pagesList_en).each((index) =>{
        let selectorName = 'homePage.blogHomePage_' + index
        cy.log(selectorName)
        homePage.verifySelectorContain(eval(selectorName), pagesList_zhtw[indexCount])
        indexCount += 1
    })
    homePage.verifySelectorContain(homePage.blogHomePage_Language, 'English')
    cy.wrap(pagesList_en).each((index) =>{
        let buttonName = 'homePage.blogHomePage_' + index
        let linkURL = homePage.blogURL_zhtw + (index + '/').toLocaleLowerCase()
        cy.log(buttonName)
        cy.log(linkURL)
        homePage.verifyButtonContain(eval(buttonName), linkURL)
    })
    homePage.verifyButtonContain(homePage.blogHomePage_Language, 'https://AndrewWu29.github.io/')
    cy.wrap(pageButtons).each((index) =>{
        let buttonName = 'homePage.blogHomePage_Button' + index
        let link = 'homePage.blogHomePage_Link' + index
        cy.log(buttonName)
        cy.log(link)
        homePage.verifyButtonContain(eval(buttonName), eval(link))
    })
})
it('language change test en to zhtw', function (){
    homePage.navigate('https://andrewwu29.github.io/')
    homePage.clickButton(homePage.blogHomePage_Language)
    homePage.verifySelectorContain(homePage.blogHomePage_Language, 'English')
})
it('language change test zhtw to en', function (){
    homePage.navigate('https://andrewwu29.github.io/zh-tw/')
    homePage.clickButton(homePage.blogHomePage_Language)
    homePage.verifySelectorContain(homePage.blogHomePage_Language, '中文')
})
it('homepage redirect to subpages testing using menu button in en', function (){
    cy.wrap(pagesList_en).each((index) =>{
        homePage.navigate(homePage.blogURL_en)
        let pageName = 'homePage.blogHomePage_' + index
        homePage.clickButton(eval(pageName))
        homePage.verifySelectorContain('h1', index.toString())
    })
})
it('homepage redirect to subpages testing using menu button in zh-tw', function (){
    let indexCount = 0
    cy.wrap(pagesList_en).each((index) =>{
        homePage.navigate(homePage.blogURL_zhtw)
        let pageName = 'homePage.blogHomePage_' + index
        homePage.clickButton(eval(pageName))
        if (index.toString() === 'Categories') {
            let containValue = 'Categories'
            cy.log(containValue)
            homePage.verifySelectorContain('h1', containValue)
            indexCount += 1
        } else {
            cy.log(pagesList_zhtw[indexCount])
            homePage.verifySelectorContain('h1', pagesList_zhtw[indexCount].toString())
            indexCount += 1
        }
    })
})