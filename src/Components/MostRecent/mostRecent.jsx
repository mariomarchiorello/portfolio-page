import React from 'react'
import { Card, CardContainer } from '../../Styles/globalstyle'
import { useAllBooks } from '../../Api'

function MostRecent(props) {
    const { data: allBooks, isLoading } = useAllBooks()
    if (isLoading) return null

    const mostRecent = allBooks[allBooks.length - 1]
    console.log(mostRecent)

    return (
        <>
            <CardContainer>
                <Card>test</Card>
            </CardContainer>
        </>
    )
}

export default MostRecent
