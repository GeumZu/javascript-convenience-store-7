import { Console } from '@woowacourse/mission-utils';
class IputView {
    static async readOrder(){
        return Console.readLineAsync(
            '구매할 상품과 수량을 입력하세요. (예 : [콜라-10], [사이다-3]): ');
    }

    static async readMembership() {
        return Console.readLineAsync('멤버쉽 할인을 적용하시겠습니까? (Y/N): ');
    }

    static async readContinue() {
        return Console.readLineAsync('추가 구매를 진행하시겠습니까? (Y/N): ');
    }
}

class OutputView {
    static printError(message) {
        Console.print(message);
    }

    static printStock(stock){
        Console.print('현재 재고 상황: ');
        for(const [name, info] of Object.entries(stock)){
            const { price, stock, promoStock, promoType } = info;
            
            Console.print(
                ``
            )
        }

    }
}
