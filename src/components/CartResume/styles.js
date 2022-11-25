import styled from 'styled-components'

export const Container = styled.div`
    background-color: #ffffff;
    padding: 15px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .container-top {
        display: grid;
        grid-gap: 10px 50px;
        grid-template-areas:
            'title title'
            'items item-price'
            'delivery-tax delivery-tax-price';

        .title {
            grid-area: title;
            margin-bottom: 20px;
        }

        .items {
            grid-area: items;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;

            color: #222222;
        }

        .item-price {
            grid-area: item-price;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;

            color: #222222;
        }

        .delivery-tax {
            grid-area: delivery-tax;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;

            color: #222222;
        }

        .delivery-tax-price {
            grid-area: delivery-tax-price;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;

            color: #222222;
        }
    }

    .container-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 24px;
        margin-top: 50px;
    }
`
