/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tw.edu.ntnu.itc.myjaxrs;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import tw.edu.ntnu.itc.filter.Secured;

/**
 *
 * @author hao
 */
@Path("/notifications")
public class NotificationsResource {
	@POST
	@Path("/ping")
	public Response ping() {
		return Response.ok().entity("Service online").build();
	}

	@GET	
	@Secured
	@Path("/update")
	@Produces(MediaType.APPLICATION_JSON)
	public Response update() {
		return Response.ok().entity("Service online").build();
	}

		
}
