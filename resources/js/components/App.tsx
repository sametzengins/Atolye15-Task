import React, { FC } from 'react';
import { Col, Row, Table} from 'antd';
import './App.css';
const { Column} = Table;

const App: FC = () => {
    const data = [
        {
            key: '1',
            property: 'fullName',
            description: 'Enter the query as spaces between words',
            type: 'string',
            default: '-',
        },

        {
            key: '2',
            property: 'shape',
            description: 'Determine the avatar\'s shape. You have two option',
            type: 'square | oval',
            default: '-',
        },
        {
            key: '3',
            property: 'size',
            description: 'Enter the pixel size of the photo\n',
            type: 'integer',
            default: '120',
        },
    ];
    return (
    <Row>
        <Col span={8} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <svg width="150" height="45" viewBox="0 0 110 33" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fe2d5b"
                      d="M8.245 6.332c.062.063.144.095.227.095.069 0 .139-.022.198-.068.791-.619 1.652-1.142 2.566-1.558v11.738l.01.085c.036 2.164 1.405 4.107 3.43 4.854l.111.019c.064 0 .129-.019.183-.058.086-.06.138-.159.138-.264v-4.346l-.005-.054-.016-.123.021-.115v-16.126c0-.091-.039-.178-.106-.24-.059-.053-.136-.082-.215-.082l-.034.002c-3.167.334-6.148 1.584-8.622 3.615-.07.057-.112.142-.117.233-.005.091.029.179.094.243l2.137 2.148zm20.912-.282c-.057-.071-.142-.113-.232-.118h-.016c-.085 0-.166.034-.227.094l-2.138 2.15c-.115.114-.125.297-.026.424 1.755 2.265 2.683 4.978 2.683 7.85 0 7.05-5.706 12.787-12.72 12.787s-12.72-5.736-12.72-12.787c0-2.871.928-5.586 2.683-7.85.1-.128.088-.31-.026-.425l-2.138-2.15c-.06-.061-.142-.094-.227-.094h-.016c-.091.005-.175.047-.232.118-2.378 2.925-3.687 6.618-3.687 10.4 0 9.07 7.342 16.449 16.365 16.449s16.365-7.379 16.365-16.449c0-3.782-1.309-7.475-3.688-10.4zm-12.677 17.816c-4.068 0-7.378-3.327-7.378-7.416 0-1.434.409-2.826 1.184-4.026.082-.127.064-.294-.043-.401l-2.116-2.127c-.061-.061-.142-.095-.227-.095l-.024.001c-.093.007-.179.054-.235.13-1.391 1.901-2.125 4.155-2.125 6.518 0 6.077 4.918 11.019 10.964 11.019 6.045 0 10.963-4.943 10.963-11.019 0-4.126-2.245-7.847-5.874-9.759v-1.959c.971.427 1.885.973 2.72 1.627.059.046.129.069.198.069.082 0 .164-.032.227-.095l2.137-2.148c.064-.064.098-.152.093-.243-.004-.091-.047-.176-.117-.233-2.516-2.066-5.553-3.323-8.78-3.631l-.03-.002c-.08 0-.156.029-.216.083-.067.061-.105.147-.105.238v8.468c0 .153.107.285.257.315 3.42.697 5.903 3.754 5.903 7.268 0 4.089-3.309 7.416-7.377 7.416z"/>
                <path fill="#424242"
                      d="M44.316 10.382l-4.481 12.227h1.517l1.099-3.407h4.864l1.049 3.407h1.467l-4.283-12.227h-1.232zm-1.416 7.584l2.018-5.699 1.963 5.699h-3.981zm6.187-6.348h3.566v10.991h1.233v-10.991h3.665v-1.236h-8.464v1.236zm17.151-.653c-.589-.444-1.611-.669-3.066-.669-1.01 0-1.831.118-2.466.352-.389.144-.707.358-.957.643-.251.283-.478.654-.691 1.111-.211.457-.367 1.034-.467 1.727-.101.698-.152 1.509-.152 2.434 0 .922.044 1.722.134 2.397.09.672.233 1.231.433 1.677.199.446.422.804.667 1.077.243.273.56.48.949.62.391.137.773.23 1.15.273.377.045.869.068 1.476.068.604 0 1.127-.039 1.572-.115.447-.081.876-.239 1.292-.478.416-.239.743-.583.984-1.028.237-.444.427-1.04.566-1.78.139-.741.206-1.756.206-3.047 0-1.292-.137-2.43-.414-3.408-.243-.801-.65-1.42-1.216-1.856zm-.066 9.124c-.156.365-.379.648-.667.842-.29.195-.613.327-.965.4-.355.075-.85.109-1.483.109-.634 0-1.15-.05-1.55-.149-.4-.102-.752-.323-1.06-.668-.303-.346-.509-.835-.615-1.47-.103-.634-.158-1.36-.158-2.171 0-.814.015-1.442.049-1.888.034-.445.076-.839.124-1.17.052-.334.13-.626.242-.879.113-.249.216-.459.308-.624.096-.17.23-.312.411-.43.176-.113.332-.204.466-.265.134-.059.325-.107.574-.134.251-.029.455-.045.617-.05l.073-.002v3.365h1.233v-3.367l.118.003c.169.005.376.021.624.05.252.027.44.075.566.134.129.061.28.152.461.265.177.118.309.26.397.43.089.165.189.376.302.631.266.604.398 1.777.398 3.527 0 1.604-.154 2.774-.464 3.51zm5.021 1.184c-.233-.088-.352-.346-.352-.769v-10.122h-1.233v10.122c0 .903.244 1.493.736 1.772.389.223.898.333 1.532.333h5.097v-1.236h-5.097c-.278 0-.505-.031-.682-.1zm9.427-4.476l-3.148-6.415h-1.35l3.883 7.883v4.344h1.233v-4.344l4.215-7.883h-1.35l-3.483 6.415zm7.979-6.415c-.567 0-1.041.168-1.422.507-.384.341-.576.893-.576 1.664v8.001c0 1.405.673 2.105 2.018 2.105h.249l5.097-.283v-.953h-5.097c-.221 0-.389-.008-.499-.024-.113-.017-.226-.093-.35-.227-.122-.131-.185-.336-.185-.617v-3.343l5.467-.163v-.99l-5.467-.166v-3.339c0-.202.01-.352.025-.459.018-.105.096-.211.233-.319.14-.105.342-.157.61-.157h5.263v-.969l-5.263-.267h-.102zm6.567 1.37v1.77l2.184-.485v9.571h2.732v-12.227h-2.716l-2.2 1.37zm14.116 3.966c-.46-.562-1.159-.873-2.089-.927-.367-.023-.685-.032-.951-.032-.789 0-1.374.134-1.749.402l.099-2.289h4.897v-2.489h-7.546l-.367 7.651h2.602c0-.591.299-.885.898-.885h1.2c.378 0 .633.095.765.284.135.189.201.444.201.768v.853c0 .267-.048.493-.149.685-.132.244-.457.368-.969.368h-4.563v2.171c1.043.178 1.884.289 2.524.333.638.045 1.53.068 2.674.068.809 0 1.525-.23 2.147-.687.324-.221.581-.543.776-.958.195-.419.29-.9.29-1.444v-1.656c0-.913-.23-1.651-.69-2.215z"/>
            </svg>
        </Col>
        <Col span={16}>
            <div style={{display: 'flex', alignItems: 'center',height: '100vh'}}>

                <Table dataSource={data}>
                    <Column title="Property" dataIndex="property" key="property" />
                    <Column title="Description" dataIndex="description" key="description" />
                    <Column title="Type" dataIndex="type" key="type"/>
                    <Column title="Default" dataIndex="default" key="default"/>
                </Table>
            </div>

        </Col>
    </Row>
);
};
export default App;
