/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tw.edu.ntnu.itc.myjaxrs;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author hao
 */
@Path("/authentication")
public class AuthenticationEndPoint {

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public Response authenticateUser(@FormParam("username") String username, @FormParam("password") String password) {
//	public Response authenticateUser(@FormDataParam("username") String username, @FormDataParam("password") String password) {
		try {
			authenticate(username, password);

			String token = issueToken(username);
			
			return Response.ok(token).build();
			
		} catch (Exception ex) {
			return Response.status(Response.Status.FORBIDDEN).build();
		}
	}

	private void authenticate(String username, String password) throws Exception {
		switch (username) {
			case "24": 
				break;
			default:
				throw new Exception("error");
		}
	}

	private String issueToken(String username) {
		if("5570".equals(username)) {
			return "55555555555";
		} else {
			return "kkkkkkk";
		}
	}
}
