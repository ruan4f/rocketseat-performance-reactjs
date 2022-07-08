import { ProductItem } from "./ProductItem";


interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({ totalPrice, results, onAddToWishlist }: SearchResultsProps) {
  
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist} />
        );
      })}
    </div>
  )
}

/**
 * 1. Criar uma nova versão do componente
 * 2. Comparar com a versão anterior
 * 3. Se houverem alterações, vai atualizar o que alkterou
 */

/**
 * 1. Pure Functional Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */

/**
 * useMemo (memoizar valor) / useCallback (memoizar função)
 * 
 * 1. Calculos pesados
 * 2. Igualdade referencial (quando a gente repassa aquela informação a um component filho)
 * 
 * 
 */