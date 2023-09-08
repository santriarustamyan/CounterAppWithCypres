import {CounterPage} from "../pages/counterPage"

const counterPage = new CounterPage()

it('Click Plus Button And Check Result', () => {

    counterPage.navigateCounterPage()


    counterPage.clickPlusButton()

    counterPage.assertCurrentCounterNumber(11)

})

it('Click Reset Button And Check Result', () => {

    counterPage.navigateCounterPage()


    counterPage.clickPlusButton()

    counterPage.clickResetButton()

    counterPage.assertCurrentCounterNumber(10)

})

it('Click Minus Button And Check Result', () => {

        counterPage.navigateCounterPage()

        counterPage.clickMinusButton()

        counterPage.assertCurrentCounterNumber(9)
    }
)
