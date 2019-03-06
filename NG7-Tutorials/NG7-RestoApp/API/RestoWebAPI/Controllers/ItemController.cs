using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using RestoWebAPI.Models;

namespace RestoWebAPI.Controllers
{
    public class ItemController : ApiController
    {
        private RestaurantDBEntities db = new RestaurantDBEntities();

        // GET: api/Item
        public IQueryable<Item> GetItems()
        {
            return db.Items;
        } 

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}