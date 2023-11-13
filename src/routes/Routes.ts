import BookListPage from "../pages/book-list/BookListPage"
import SpecificBookPage from "../pages/specific-book/SpecificBookPage" 
import BasketPage from "../pages/basket/BasketPage" 
import SignInPage from "../pages/signin/SignInPage" 
import NotFoundPage from "../pages/not-found/NotFoundPage" 
import { FunctionComponent } from "react"

interface Route {
    path: string,
    component: FunctionComponent
}

export const privateRoutes: Route[] = [
    {path: '/', component: BookListPage},
    {path: '/books', component: BookListPage},
    {path: '/book/:id', component: SpecificBookPage},
    {path: '/cart', component: BasketPage},
    {path: '/sign-in', component: SignInPage},
    {path: '*', component: NotFoundPage}
]

export const publicRoutes: Route[] = [
    {path: '/', component: SignInPage},
    {path: '/sign-in', component: SignInPage},
    {path: '*', component: NotFoundPage}
]