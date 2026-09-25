//Practice validating static, dynamic, hidden, and delayed text elements
import { Page, Locator } from '@playwright/test';

export class ElementPage {
    page!: Page;
    automationTestingPractice: Locator;
    textValidationSection: Locator;
    verifyDifferentHeadingLevels: Locator;
    subsectionStaticText: Locator;
    uiVerificationTests: Locator;
    endOfHeadingExamples: Locator;
    staticParagraphs : Locator;
    secondStaticParagraph : Locator;
    updateStatusBtn : Locator;
    showHiddenTxt : Locator;
    hiddenTxt : Locator;
    clickbtn : Locator;
    youClickd : Locator;
    doubleClickBtn : Locator;
    youdblClickd : Locator;
    hoverBtn : Locator;
    hoverTxt : Locator;

    constructor(page: Page) {
        this.page = page;
        this.automationTestingPractice = page.getByRole('heading', { name: 'Automation Testing Practice', level: 1 });
        this.textValidationSection = page.getByRole('heading', { name: 'Text Validation Section', level: 2 });
        this.verifyDifferentHeadingLevels = page.getByRole('heading', { name: 'Verify Different Heading Levels', level: 3 });
        this.subsectionStaticText = page.getByRole('heading', { name: 'Subsection: Static Text', level: 4 });
        this.uiVerificationTests = page.getByRole('heading', { name: 'UI Verification Tests', level: 5 });
        this.endOfHeadingExamples = page.getByRole('heading', { name: 'End of Heading Examples', level: 6 });
        //static paragraphs
        this.staticParagraphs = page.getByText('This paragraph is used to test text validation and content verification in automation scripts.');
        this.secondStaticParagraph = page.getByText ('Automation testing ensures that web elements behave as expected under different scenarios');

        //DynamicText
        this.updateStatusBtn = page.getByRole('button', { name: 'Update Status' });

        //HiddenText
        this.showHiddenTxt = page.getByRole('button' , {   name: 'Show Hidden Text' });
        this.hiddenTxt = page.getByText('This text is hidden initially');
       
        //Button Interaction Practice
        this.clickbtn = page.getByRole  ( ('button'), { name :' Click Me', exact:true });
        this.youClickd = page.getByText( 'You Clicked Me!');
        this.doubleClickBtn =  page.getByRole  ( ( 'button'), { name : 'Double Click Me',exact:true});
        this.youdblClickd = page.getByText ( 'You Double Clicked Me!');
        this.hoverBtn =  page.getByRole (  ( 'button'), {name : ' Hover Me'});
        this.hoverTxt = page.getByText ( 'You Hovered Me!'  );

    }
    async navigateToElementPage(){
    await this.page.goto('https://www.automationpracticehub.com/elements/');
    }

    async clickUpdateStatus(){
        await this.updateStatusBtn.click();
    }
    async clickShowhdnTxt(){
        await this.showHiddenTxt.click();
    }
    async clickButton(){
        await this.clickbtn.click();
    }
    async doubleClick() {
        await this.doubleClickBtn.dblclick();
    }
}