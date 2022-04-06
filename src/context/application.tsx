import React from 'react';

import { api } from '../services/api'

interface IProduct {
    id: string;
    active: boolean;
    name: string;
    product_url: string;
    code: number;
    group_code: string;
    unity: string;
    reference: string;
    fraction: string;
    unity_reference: string;
    fraction_reference: string;
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
    page: number;
    totalPages: number;
    perPage: number;
    group: string;
    products: IProduct[];
    groups: IGroup[];
    loadingProducts: boolean;
}

interface IApplicationContext extends IApplicationState {
    handleSearch: (search: string) => void;
    fetchProducts: () => Promise<void>;
    handleGroup: (group: string) => void;
    handlePage: (page: number) => void;
}

const ApplicationContext = React.createContext<IApplicationContext>({
    search: '',
    group: '',
    page: 0,
    perPage: 0,
    totalPages: 0,
    products: [],
    groups: [],
    loadingProducts: false,
    handleSearch: () => {
    },
    handleGroup: () => {
    },
    handlePage: () => {
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
                products: action.payload.data,
                totalPages: action.payload.last_page,
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
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload,
            };
        case 'SET_LOADING_PRODUCTS':
            return {
                ...state, loadingProducts: action.payload
            }
        default:
            return state;
    }
};

const ApplicationProvider: React.FC = ({ children }: any) => {
    const [state, dispatch] = React.useReducer(applicationReducer, {
        search: '',
        group: '',
        page: 1,
        perPage: 15,
        totalPages: 1,
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

    const handlePage = (page: number) => {
        dispatch({
            type: 'SET_PAGE',
            payload: page,
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

        const response = await api.get(`products`, {
            params: {
                //active: true,
                name: state.search,
                page: state.page,
                per_page: state.perPage,
                group_code: state.group,
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
    }, [dispatch, state.search, state.page, state.perPage, state.group]);

    return (
        <ApplicationContext.Provider
            value={{
                ...state,
                handleSearch,
                handleGroup,
                fetchProducts,
                handlePage
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};

export { ApplicationProvider };
export default ApplicationContext;