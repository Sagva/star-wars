import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = (props) => {
    const { activPage, pageTotal, setCurrentPage } = props.values

    let active = activPage; //active page which is highlighted
    let items = [];//how many pages in the pagination bar

    for (let number = 1; number <= pageTotal; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => setCurrentPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }


    const paginationBasic = (
        <div>
            <Pagination className='justify-content-center mt-3'>{items}</Pagination>
            <br />
        </div>
    );

    return (
        <div className='d-flex flex-column justify-content-end'>
            {paginationBasic}
        </div>
    );
};

export default PaginationComponent;

