using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LMS.Models;

namespace LMS.Controllers
{
   
        [RoutePrefix("api/admin")]
        public class AdminController : ApiController
        {
            LMSEntities4 DB = new LMSEntities4();

            [Route("ClientManagerView")]
            [HttpPost]
            public object InsertClientManager(ClientManager Reg)
            {
                try
                {

                    ClientManager EL = new ClientManager();
                    if (EL.Id == 0)
                    {
                        EL.Name = Reg.Name;
                        EL.DOB = Reg.DOB;
                        EL.Address = Reg.Address;
                        EL.Password = Reg.Password;
                        EL.Phone = Reg.Phone;
                        EL.DOB = Reg.DOB;
                        EL.Email = Reg.Email;
                        DB.ClientManagers.Add(EL);
                        DB.SaveChanges();
                        return new Response
                        { Status = "Success", Message = "Record SuccessFully Saved." };
                    }
                }
                catch (Exception)
                {

                    throw;
                }
                return new Response
                { Status = "Error", Message = "Invalid Data." };
            }

            [Route("clientdetails")]
            [HttpGet]
            public object clientdetails()
            {

                var a = DB.ClientManagers.ToList();
                return a;
            }
            [Route("removeclient")]
            [HttpDelete]
            public object RemoveClient(int id)
            {
                var obj = DB.ClientManagers.Where(x => x.Id == id).ToList().FirstOrDefault();
                DB.ClientManagers.Remove(obj);
                DB.SaveChanges();
                return new Response
                {
                    Status = "Delete",
                    Message = "Rejected"
                };
            }


        }
    }

