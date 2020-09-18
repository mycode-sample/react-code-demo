jar包在8080端口启动

`/api/common/currentTime`：获取当前时间，无参数

`/api/common/customTime`：设置当前参数，参数：

- `year`
- `month`
- `day`
- `hour`
- `minute`
- `second`

参数无校验。如果输入错误会显示错误信息。