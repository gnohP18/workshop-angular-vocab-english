| Hook                          | Khi nào chạy                                        | Tương tự React Hook                               | Mục đích chính                                |
| ----------------------------- | --------------------------------------------------- | ------------------------------------------------- | --------------------------------------------- |
| **`ngOnChanges()`**           | Khi input property (`@Input`) thay đổi              | `useEffect(() => {}, [prop])`                     | Theo dõi thay đổi từ parent component         |
| **`ngOnInit()`**              | Khi component khởi tạo (sau khi nhận input lần đầu) | `useEffect(() => {}, [])`                         | Khởi tạo data, gọi API lần đầu                |
| **`ngDoCheck()`**             | Mỗi lần Angular check change detection              | Không có tương đương chính xác                    | Custom change detection (ít dùng)             |
| **`ngAfterContentInit()`**    | Sau khi Angular chèn nội dung `<ng-content>`        | Không có tương đương trực tiếp                    | Khi dùng content projection                   |
| **`ngAfterContentChecked()`** | Sau mỗi lần Angular check nội dung được chèn        | Không có tương đương                              | Theo dõi `<ng-content>` thay đổi              |
| **`ngAfterViewInit()`**       | Sau khi view và child component render xong         | `useLayoutEffect()` hoặc `useEffect()` sau render | Dùng để thao tác DOM, ViewChild               |
| **`ngAfterViewChecked()`**    | Sau mỗi lần view được re-check                      | Không có tương đương trực tiếp                    | Debug hoặc theo dõi thay đổi UI               |
| **`ngOnDestroy()`**           | Trước khi component bị hủy (rời khỏi DOM)           | `useEffect(() => { return cleanup; }, [])`        | Dọn dẹp subscription, timeout, event listener |

| Use Case                      | React Hook                                         | Angular Hook                                              |
| ----------------------------- | -------------------------------------------------- | --------------------------------------------------------- |
| Gọi API khi component mount   | `useEffect(() => { fetch... }, [])`                | `ngOnInit()`                                              |
| Cleanup khi component unmount | `useEffect(() => { return () => cleanup(); }, [])` | `ngOnDestroy()`                                           |
| Theo dõi props thay đổi       | `useEffect(() => { ... }, [props.x])`              | `ngOnChanges(changes)`                                    |
| Truy cập DOM sau render       | `useEffect()` hoặc `useLayoutEffect()`             | `ngAfterViewInit()`                                       |
| Custom logic chạy mỗi render  | `useEffect()`                                      | `ngDoCheck()` (nhưng Angular tự làm change detection rồi) |
