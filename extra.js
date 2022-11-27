const { data = [], isLoading } = useQuery({
    queryKey: ['sellersInfo'],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/seller/${email}`)
        const data = await res.json()
        return data;
    }
})

if (isLoading) {
    <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
}