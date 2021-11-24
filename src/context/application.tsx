import React from 'react';

import {api} from '../services/api'

interface IProduct {
    id: string;
    active: boolean;
    name: string;
    product_url: string;
    code: number;
    group_code: string;
}

interface IGroup {
    id: string;
    name: string;
    code: string;
    value: string;
    label: string;
}

interface IAction {
    type: string;
    payload?: any;
}

interface IApplicationState {
    search?: string;
    group: string;
    products: IProduct[];
    groups: IGroup[];
    loadingProducts: boolean;
}

interface IApplicationContext extends IApplicationState {
    handleSearch: (search: string) => void;
    fetchProducts: () => Promise<void>;
    handleGroup: (group: string) => void;
}

const ApplicationContext = React.createContext<IApplicationContext>({
    search: '',
    group: '',
    products: [],
    groups: [],
    loadingProducts: false,
    handleSearch: () => {
    },
    handleGroup: () => {
    },
    fetchProducts: () => Promise.resolve(),
});

const applicationReducer = (state: IApplicationState, action: IAction) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.payload,
            };
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        case 'SET_GROUPS':
            return {
                ...state,
                groups: action.payload,
            };
        case 'SET_GROUP':
            return {
                ...state,
                group: action.payload,
            };
        case 'SET_LOADING_PRODUCTS':
            return {
                ...state, loadingProducts: action.payload
            }
        default:
            return state;
    }
};

const ApplicationProvider: React.FC = ({children}: any) => {
    const [state, dispatch] = React.useReducer(applicationReducer, {
        search: '',
        group: '',
        products: [],
        groups: [],
        loadingProducts: false,
    });

    const handleSearch = (search: string) => {
        dispatch({
            type: 'SET_SEARCH',
            payload: search,
        });
    };

    const handleGroup = (group: string) => {
        dispatch({
            type: 'SET_GROUP',
            payload: group,
        });
    };

    React.useEffect(() => {
        const fetchgroups = async () => {
            const response = await api.get('groups');
            dispatch({
                type: 'SET_GROUPS',
                payload: response.data,
            });
        };

        fetchgroups();
    }, [dispatch]);

    const fetchProducts = React.useCallback(async () => {
        dispatch({
            type: 'SET_LOADING_PRODUCTS',
            payload: true,
        });

        const response = await api.get('products', {
            params: {
                active: 1,
                name: state.search,
            },
        });

        dispatch({
            type: 'SET_PRODUCTS',
            payload: response.data,
        });

        dispatch({
            type: 'SET_LOADING_PRODUCTS',
            payload: false,
        });
    }, [dispatch, state.search]);

    return (
        <ApplicationContext.Provider
            value={{
                ...state,
                products: state.group ? state.products.filter((product: IProduct) => product.group_code === state.group) : state.products,
                handleSearch,
                handleGroup,
                fetchProducts
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};

export {ApplicationProvider};
export default ApplicationContext;