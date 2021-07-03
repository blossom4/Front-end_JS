// export default로 정의한 함수를 다른곳에서도 사용할 수 있다.
export default function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}