import React from "react";

function Book(props) {
    // 책 Compoent 
    // 책 검색 결과에서 사용

    // 책 이미지 선택 시, 부모 Component 에 책장에 책 이미지 추가할 것을 요청
    // 즉 부모 Compoennt 로부터 받은 CallBack 함수 사용
    const onBookSeleted = () => {
        props.select({ img: props.bookInfo.image })
    }

    // title, author 은 제목에서 검색어와 일치하는 부분은 태그로 감싸져 있다.
    // 따라서, 각종 tag 제거
    const title = props.bookInfo.title.toString().replace(/(<([^>]+)>)/ig, "")
    const author = props.bookInfo.author.toString().replace(/(<([^>]+)>)/ig, "")

    return (
        <div className="Book">
            <img src={props.bookInfo.image} onClick={onBookSeleted} />
            <div className="BookInfo">
                <span className="BookTitle">{title}</span><br></br>
                <span className="BookDetails">
                    {author} / {props.bookInfo.price} / {props.bookInfo.link}
                </span>
            </div>
        </div>
    )
}

export default Book;
