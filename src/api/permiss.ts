import request from "@/utils/request";

//登录
export function empolyeeLogin(data: any) {
    return request({
        url: "/api/employee/login",
        method: "post",
        data,
    });
}
//获取用户信息
export function getEmpoyeeInfo(data: any) {
    return request({
        url: "/api/employee/findByEmployeeName",
        method: "post",
        params:{
            employeeName:data
        }
    });
}

//获取全部菜单
export function getFirstMeun() {
    return request({
        url: "/api/menu/findAll",
        method: "post",
    });
}
//获取角色的菜单
export function getRoleMenuse(data: any) {
    return request({
        url: "/api/role/getRoleMenus",
        method: "post",
        params: {
            roleid: data,
        },
    });
}



//添加菜单
export function addMeun(data: any) {
    return request({
        url: "/api/menu/add",
        method: "post",
        data,
    });
}

//删除菜单
export function deleteMeun(data: any) {
    return request({
        url: "/api/menu/delete",
        method: "post",
        params: {
            id: data,
        },
    });
}

//修改菜单
export function updateMeun(data: any) {
    return request({
        url: "/api/menu/update",
        method: "post",
        data,
    });
}

//获取所有角色
export function getAllRole() {
    return request({
        url: "/api/role/findAll",
        method: "post",
    });
}

//
export function addRole(data: any) {
    return request({
        url: "/api/role/add",
        method: "post",
        data,
    });
}

export function getMeunRole(data: any) {
    return request({
        url: "/api/role/getRoleMenus",
        method: "post",
        params: {
            roleId: data,
        },
    });
}

export function updateRoleMeun(data: any) {
    return request({
        url: "/api/role/update",
        method: "post",
        data
    });
}
export function deleteRole(data: any) {
    return request({
        url: "/api/role/delete",
        method: "post",
        params: {
            roleId: data,
        },
    });
}

export function getEmployee() {
    return request({
        url: "/api/employee/findAll",
        method: "post",

    });
}
//获取用户角色
export function findEmployeeRoles(data: any) {
    return request({
        url: "/api/employeerole/findEmployeeRoles",
        method: "post",
        params: {
            empid: data,
        },
    });
}

export function addEmployeeRole(data: any) {
    return request({
        url: "/api/employeerole/add",
        method: "post",
        data,
    });
}

export function deletefirstRole(data: any) {
    return request({
        url: "/api/employeerole/deleteRole",
        method: "post",
        params: data
    });
}

export function deleteEmployee(data: any) {
    return request({
        url: "/api/employeerole/delete",
        method: "post",
        params: {
            empid: data,
        },
    });
}

//用户注册
export function addEmployee(data: any) {
    return request({
        url: "/api/employee/add",
        method: "post",
        data,
    });
}